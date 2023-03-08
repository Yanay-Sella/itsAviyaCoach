const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: Number, default: 2020 }, // 2020 is a regular user
  refreshToken: String,
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
