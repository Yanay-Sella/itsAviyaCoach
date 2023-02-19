const express = require("express");

const {
  handleSignUp,
  handleLogIn,
} = require("../controllers/auth-controller.js");
const {
  handleRefreshToken,
} = require("../controllers/refreshToken-controller.js");

const router = express.Router();

//login and signup
router.post("/signup", handleSignUp);
router.post("/login", handleLogIn);
//TODO: logout route and delete the refresh token

//others
router.get("/refresh", handleRefreshToken);

module.exports = router;
