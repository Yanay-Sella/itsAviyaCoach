const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  console.log(authHeader);

  console.log("hello JWT");

  if (!authHeader?.startsWith("Berear ")) return res.sendStatus(401); // Unauthorized
  const token = authHeader.split(" ")[1]; //"Bearer <token>"

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.sendStatus(403);
    } //invalid token, forbidden
    req.user = decoded.userInfo.username;
    req.role = decoded.userInfo.role;
    next();
  });
};

module.exports = verifyJWT;
