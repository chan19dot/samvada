const { userAuthSchema, userLoginSchema } = require("../utils/joiSchema");
const bcrypt = require("bcryptjs");
const SALTGENROUND = 10;
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const crypto = require("crypto");

const register = async (req, res, next) => {
  try {
    //add joi validation for this schema {email, password}
    const { error, value: user } = userAuthSchema.validate(req.body);
    if (error) {
      throw new Error(error);
    }
    //bcrypt the pass
    const salt = await bcrypt.genSalt(SALTGENROUND);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    //save the email and pass in the users table
    const newUser = new User({
      ...user,
    });
    const response = await newUser.save();
    console.log(response);
    res.status(200).json({
      message: `${user.emailId} successfully registered`,
    });
  } catch (err) {
    console.log(err);
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "ERROR";
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
    });
  }

  //save the email and pass in the users table
};

const login = async (req, res, next) => {
  try {
    const { error, value: cred } = userLoginSchema.validate(req.body);
    if (error) {
      throw new Error(error);
    }
    //query the data by emailId
    const userStored = await User.findOne({ emailId: cred.emailId });
    //bcrypt.compare password
    const isAuth = await bcrypt.compare(cred.password, userStored.password);
    if (!isAuth) {
      err = new Error(error);
      err.statusCode = 401;
      err.message = "Password doesn't match";
      err.status = "UnAuthorized";
      throw err;
    }
    const payload = {
      username: userStored.userName,
      exp: Math.floor(Date.now() / 1000) + 1800,
    };
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(payload, secretKey);
    const refreshToken = generateRefreshToken();
    //call another function async to set the user online
    res.json({
      token: token,
      refreshToken: refreshToken,
      emailId: userStored.emailId,
      userName: userStored.userName,
    });

    //return a jwt here
  } catch (err) {
    console.log(err);
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "ERROR";
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
    });
  }
};
const generateRefreshToken = () => {
  const refreshToken = crypto.randomBytes(64).toString("hex");
  return refreshToken;
};

module.exports = {
  register,
  login,
};
