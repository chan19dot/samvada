const { userAuthSchema } = require("../utils/joiSchema");
const bcrypt = require("bcryptjs");
const SALTGENROUND = 10;
const User = require("../models/userModel");

const validate = async (req, res, next) => {
  //add joi validation for this schema {email : , password}
  //bcrypt the password
  //getByEmailId
  //compare the password
  //return policy
};

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

const login = async (req, res, next) => {};

module.exports = {
  register,
  login,
};
