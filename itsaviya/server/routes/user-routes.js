// path: /api/user

const express = require("express");

const verifyJWT = require("../middleware/verifyJWT");
const verifyAdmin = require("../middleware/verifyAdmin");

const {
  handleSignUp,
  handleLogIn,
  handleLogout,
} = require("../controllers/user/auth-controller.js");

const {
  sendVeriCode,
  handleVefiry,
} = require("../controllers/user/verification");

const {
  sendVerifyForgot,
  changePassword,
} = require("../controllers/user/forgot-controller");

const {
  handleRefreshToken,
} = require("../controllers/user/refreshToken-controller.js");
const { getUser, getRole } = require("../controllers/user/user-controller");

const router = express.Router();

//login and signup
router.post("/verify", handleVefiry);
router.post("/signup", handleSignUp);
router.post("/login", handleLogIn, sendVeriCode);
router.get("/logout", handleLogout); // deletes refresh token, no longer access to many stuff

//user modification
router.post("/forgot", sendVerifyForgot);
router.post("/password", changePassword);

//tokens
router.get("/refresh", handleRefreshToken);

//user api
router.get("/", verifyJWT, getUser);
router.get("/role", verifyAdmin, getRole); // double layer security

module.exports = router;
