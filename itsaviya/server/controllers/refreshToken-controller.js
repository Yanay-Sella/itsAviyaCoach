const { User } = require("../models/userModel.js");

const jwt = require("jsonwebtoken");
require("dotenv").config();

//creating access token using a refresh token given in a cookie
const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies; // cookie comes along with the get request
  console.log(cookies);
  if (!cookies?.jwt) return res.sendStatus(401); //Unauthorized
  console.log(cookies.jwt);
  const refreshToken = cookies.jwt;

  const user = await User.findOne({ refreshToken }); //finding user by its refresh token
  if (!user) return res.sendStatus(403); // forbidden
  console.log(user);

  //evaluate jwt
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || user.userName !== decoded.userName) return res.sendStatus(403); //forbidden
    const accessToken = jwt.sign(
      {
        userName: decoded.userName,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "300000ms" } //5 minutes
    );
    res.json({ accessToken });
  });
};

module.exports = { handleRefreshToken };
