const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  refreshToken: String,
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
