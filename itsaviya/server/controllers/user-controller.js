const { User } = require("../models/userModel");

const getUser = async (req, res) => {
  const userName = req.userName; // user has been attached to the req.user in the verifyJWT middleware
  console.log("getting user");
  let foundUser;
  try {
    foundUser = await User.findOne({ userName }, { password: 0, role: 0 }); // searching for user by userName
  } catch (error) {
    console.log(error);
  }
  res.json(foundUser);
};

const getRole = async (req, res) => {
  const userName = req.userName;
  let isAdmin;
  try {
    //TODO: not sure if to use db or jwt to get the role
    const foundUser = await User.findOne({ userName });
    const role = foundUser.role;
    isAdmin = `${role}` === `${process.env.USER_ADMIN_ROLE}`;
  } catch (error) {
    console.log(error);
  }
  console.log(isAdmin);
  res.json(isAdmin);
};

module.exports = { getUser, getRole };
