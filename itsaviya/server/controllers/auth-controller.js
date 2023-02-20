const bcrypt = require("bcryptjs");
const { User } = require("../models/userModel.js");

const jwt = require("jsonwebtoken");
require("dotenv").config();

//TODO: add conflicts
const handleSignUp = async (req, res) => {
  const { userName, email, password } = req.body;
  console.log(req.body);
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 14); //hashing the password
  } catch (error) {
    console.log(error);
  }
  const newUser = new User({
    userName,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(200).json({ message: "user created!" });
  } catch (error) {
    console.log(error);
  }
};

const handleLogIn = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);

  let user;
  try {
    user = await User.findOne({ email }); // finding a user with a matching email
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error, please check your input" });
  }
  if (!user) {
    // user does not exist
    return res.status(400).json({ message: "invalid username or password" });
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, user.password); // comparing the user hashed password with a given hashed password
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error, please check your input" });
  }
  if (!isValidPassword) {
    return res.status(404).json({ message: "invalid username or password" });
  }

  //creating tokens with authenticating correct username and password

  const accessToken = jwt.sign(
    { userName: user.userName },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "300000ms" } // 5 minutes
  );

  const refreshToken = jwt.sign(
    { userName: user.userName },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1d" }
  );

  user.refreshToken = refreshToken; // setting the user his new refresh token
  await user.save();
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  }); // 24 hours
  res.status(200).json({
    userName: user.userName,
    email: user.email,
    accessToken,
  }); // user logged in
};

const handleLogout = async (req, res) => {
  //TODO: on client, delete the access token when clicking log out

  const cookies = req.cookies;
  if (!cookies.jwt) return res.sendStatus(204); //Nothing to delete anyway

  const refreshToken = cookies.jwt;

  const foundUser = await User.find({ refreshToken }); // find user by the r.t above
  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }); // need to have the same options of the created cookie
    return res.sendStatus(204);
  }

  //delete the refresh token in db
  foundUser.refreshToken = "";
  res.clearCookie("jwt", { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }); // need to have the same options of the created cookie
  res.sendStatus(204);
};

module.exports = { handleSignUp, handleLogIn, handleLogout };
