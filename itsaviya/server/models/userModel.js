const mongoose = require("mongoose");
require("dotenv").config();

const defaultRole = process.env.USER_DEFAULT_ROLE;

const userSchema = new mongoose.Schema({
  userName: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, default: defaultRole },
  refreshToken: String,
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
