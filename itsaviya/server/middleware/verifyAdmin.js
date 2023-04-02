// const verifyAdmin = (req, res, next) => {
//   if (!req.role) return res.sendStatus(401);
//   const allowed = req.role === 2018;
//   if (!allowed) return res.sendStatus(401);
//   next();
// };

// module.exports = verifyAdmin;

const jwt = require("jsonwebtoken");
require("dotenv").config();

//only for logged in users
const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization; // checking if the user is logged in

  console.log("verify JWTadmin");

  if (!authHeader?.startsWith("Bearer ")) {
    console.log("not loggedIn");
    return res.sendStatus(401);
  } // Unauthorized
  const token = authHeader.split(" ")[1]; //"Bearer <token>"

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.sendStatus(403);
    } //invalid token, forbidden

    //"decoded" is the user that matches the access token
    req.userName = decoded.userInfo.userName;
    req.role = decoded.userInfo.role;

    if (`${req.role}` !== `${process.env.USER_ADMIN_ROLE}`) {
      console.log(`illegal attempt from: ${req.userName}`);
      return res.sendStatus(401); //user not authorized, not an admin
    }

    next();
  });
};

module.exports = verifyAdmin;
