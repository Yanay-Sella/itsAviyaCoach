const { User } = require("../models/userModel.js");

const jwt = require("jsonwebtoken");
require("dotenv").config();

//creating access token using a refresh token given in a cookie
const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies; // cookie comes along with the get request
  console.log(cookies);
  if (!cookies?.jwt) return res.sendStatus(401); //Unauthorized
  const refreshToken = cookies.jwt;

  const user = await User.findOne({ refreshToken }); //finding user by its *refresh* token
  if (!user) return res.sendStatus(403); // forbidden

  //evaluate jwt
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || user.userName !== decoded.userInfo.userName)
      return res.sendStatus(403); //forbidden
    const accessToken = jwt.sign(
      {
        userInfo: {
          userName: decoded.userInfo.userName,
          role: decoded.userInfo.role,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "300000ms" } //5 minutes = 300000ms
    );
    res.json({ accessToken });
  });
};

module.exports = { handleRefreshToken };
