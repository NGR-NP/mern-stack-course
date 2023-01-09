const User = require("../models/User");

const logout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);

  const refreshTokenDB = cookies.jwt;

  const foundUser = await User.findOne({ refreshTokenDB });
  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true });
    return res.sendStatus(204);
  }

  foundUser.refreshTokenDB = "";
  await foundUser.save();

  res.clearCookie("jwt", { httpOnly: true });
  res.sendStatus(204);
};
module.exports = logout;
