const jwt = require("jsonwebtoken");
require("dotenv").config();

//only for logged in users
const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  console.log(authHeader);

  console.log("hello JWT");

  if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401); // Unauthorized
  const token = authHeader.split(" ")[1]; //"Bearer <token>"

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.sendStatus(403);
    } //invalid token, forbidden

    //"decoded" is the user that matches the access token
    req.user = decoded.userInfo.userName;
    next();
  });
};

module.exports = verifyJWT;
