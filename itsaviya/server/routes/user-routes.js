const express = require("express");

const verifyJWT = require("../middleware/verifyJWT");

const {
  handleSignUp,
  handleLogIn,
  handleLogout,
} = require("../controllers/auth-controller.js");
const {
  handleRefreshToken,
} = require("../controllers/refreshToken-controller.js");
const { getUser, getRole } = require("../controllers/user-controller");

const router = express.Router();

//login and signup
router.post("/signup", handleSignUp);
router.post("/login", handleLogIn);
router.get("/logout", handleLogout); // deletes refresh token, no longer access to many stuff

//tokens
router.get("/refresh", handleRefreshToken);

//user api
router.get("/", verifyJWT, getUser);
router.get("/role", verifyJWT, getRole);

module.exports = router;
