const bcrypt = require("bcryptjs");
const { User } = require("../../models/userModel.js");
const { validate } = require("./common-functions.js");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleSignUp = async (req, res) => {
  let { userName, email, password } = req.body;
  email = email.toLowerCase();

  console.log(`Sign up attempt from: ${email}`);

  if (!validate(email, password, userName))
    return res
      .status(400)
      .json({ message: "invalid user input, please try again" });

  try {
    let existingUser;
    existingUser = await User.findOne({ userName });
    if (existingUser) {
      return res.status(409).json({ entry: "userName" });
    }
    existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ entry: "email" });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "server error, please check your input" });
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 14); //hashing the password
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error, please check your input" });
  }
  const newUser = new User({
    userName,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    console.log(`${userName} signed up succefully!`);
    res.status(200).json({ message: "user created!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error, please check your input" });
  }
};

const handleLogIn = async (req, res, next) => {
  let { email, password } = req.body;
  email = email.toLowerCase();

  console.log(`Log in attempt from: ${email}`);

  if (!validate(email, password))
    return res
      .status(400)
      .json({ message: "invalid user input, please try again" });

  let user;
  try {
    user = await User.findOne({ email }); // finding a user with a matching email
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error, please check your input" });
  }
  if (!user) {
    console.log("log in failed");
    return res.status(404).json({ message: "invalid username or password" });
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
    console.log("log in failed");
    return res.status(404).json({ message: "invalid username or password" });
  }

  if (user.verified === false) {
    return next(); // sendVeriCode
  }

  //creating tokens with authenticating correct username and password

  const accessToken = jwt.sign(
    { userInfo: { userName: user.userName, role: user.role } },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "300000ms" } // 5 minutes = 300000ms
  );

  const refreshToken = jwt.sign(
    { userInfo: { userName: user.userName, role: user.role } },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1d" } // 1 day
  );

  user.refreshToken = refreshToken; // setting the user his new refresh token
  await user.save();
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: "None",
    secure: true,
  }); // 24 hours
  console.log(`${user.userName} logged in succefully!`);

  //TODO: not return all the user info if not needed.
  res.status(200).json({
    userId: user._id,
    accessToken,
    userName: user.userName,
    email: user.email,
  }); // user logged in
};

const handleLogout = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies.jwt) return res.sendStatus(204); //Nothing to delete anyway

  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({ refreshToken }); // find user by the RT above
  console.log("logOut: " + foundUser?.userName);
  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true }); // need to have the same options of the created cookie
    return res.sendStatus(204);
  }

  //delete the refresh token in db
  foundUser.refreshToken = "";
  await foundUser.save();
  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true }); // need to have the same options of the created cookie
  res.sendStatus(204);
};

module.exports = {
  handleSignUp,
  handleLogIn,
  handleLogout,
};
