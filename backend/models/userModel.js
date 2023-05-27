const mongoose = require("mongoose");
const db = require("../utils/connection");
// Define the User schema
const userSchema = new mongoose.Schema({
  emailId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
    unique: false,
  },
  lastName: {
    type: String,
    required: true,
    unique: false,
  },
});

// Create the User model
const User = mongoose.model("users", userSchema);

// Export the User model
module.exports = User;
