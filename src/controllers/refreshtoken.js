const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { REFRESH_JWT, JWT } = require("../config/secrets");

const genRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshTokenDB = cookies.jwt;
  const foundUser = await User.findOne({ refreshTokenDB });
  if (!foundUser) return res.sendStatus(403);
  jwt.verify(refreshTokenDB, REFRESH_JWT, (err, decoded) => {
    if (err || foundUser.username !== decoded.username)
      return res.sendStatus(403);
    const role = Object.values(foundUser.role).filter(Boolean);
    const accessToken = jwt.sign(
      {
          username: decoded.username,
          role: role,
      },
      JWT,
      {
        expiresIn: "30s",
      }
    );
    res.json({ role, accessToken });
  });
};

module.exports = genRefreshToken;
