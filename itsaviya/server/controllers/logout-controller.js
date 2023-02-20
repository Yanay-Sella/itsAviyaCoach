const { User } = require("../models/userModel.js");

const handleLogout = async (req, res) => {
  //TODO: on client, delete the access token when clicking log out

  const cookies = req.cookies;
  if (!cookies.jwt) return res.sendStatus(204); //Nothing to delete anyway

  const refreshToken = cookies.jwt;

  const foundUser = await User.find({ refreshToken }); // find user by the r.t above
  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }); // need to have the same options of the created cookie
    return res.sendStatus(204);
  }

  //delete the refresh token in db
  foundUser.refreshToken = "";
  res.clearCookie("jwt", { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }); // need to have the same options of the created cookie
  res.sendStatus(204);
};

module.exports = { handleLogout };
