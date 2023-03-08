const { User } = require("../models/userModel");

const getRole = (req, res) => {
  const userName = req.user;
  const role = req.role;
  console.log(userName);
  console.log(role);
};

module.exports = { getRole };
