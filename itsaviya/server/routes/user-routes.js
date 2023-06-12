// path: /api/user

const express = require("express");

const verifyJWT = require("../middleware/verifyJWT");
const verifyAdmin = require("../middleware/verifyAdmin");

const {
  handleSignUp,
  handleLogIn,
  handleLogout,
  sendVeriCode,
  handleVefiry,
  sendVerifyForgot,
  changePassword,
} = require("../controllers/auth-controller.js");
const {
  handleRefreshToken,
} = require("../controllers/refreshToken-controller.js");
const { getUser, getRole } = require("../controllers/user-controller");

const router = express.Router();

//login and signup
router.post("/verify", handleVefiry);
router.post("/signup", handleSignUp);
router.post("/login", handleLogIn, sendVeriCode);
router.get("/logout", handleLogout); // deletes refresh token, no longer access to many stuff

//user modification
router.post("/forgot", changePassword, sendVerifyForgot);

//tokens
router.get("/refresh", handleRefreshToken);

//user api
router.get("/", verifyJWT, getUser);
router.get("/role", verifyAdmin, getRole); // double layer security

module.exports = router;
