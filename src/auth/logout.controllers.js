const User = require("../models/User");

const logout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);

  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({ refreshToken });
  if (!foundUser) {
    res.clearCookie("jwt", { secure: true,
      httpOnly: true,
      sameSite: 'none',
      maxAge: 30*24*60*60*1000, });
    return res.sendStatus(204);
  }

  foundUser.refreshTokenDB = "";
  await foundUser.save();

  res.clearCookie("jwt", { secure: true,
    httpOnly: true,
    sameSite: 'none',
    maxAge: 30*24*60*60*1000, });
  res.sendStatus(204);
};
module.exports = logout;
