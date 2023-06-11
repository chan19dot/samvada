const jwt = require("jsonwebtoken");
require("dotenv").config();

const isValid = async (req, res, next) => {
  try {
    const token = req.body.token;
    console.log("in middleware");
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded);

    // const isExpired = Date.now() >= decoded.exp * 1000;
    // if (!isExpired) {
    //   next();
    // }
  } catch (err) {
    console.log(err);
    err.statusCode = 401;
    err.status = "Authentication Error";
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
};

module.exports = {
  isValid,
};
