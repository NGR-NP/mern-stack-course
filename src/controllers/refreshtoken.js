const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { REFRESH_JWT, JWT } = require("../config/secrets");
const ERROR = require("../utils/error");

const genRefreshToken = async (req, res, next) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return next(ERROR(401, "cookie not avaliable"));
  const refreshTokenDB = cookies.jwt;
  const foundUser = await User.findOne({ refreshTokenDB });
  if (!foundUser) return next(ERROR(403, "token expire"));
  jwt.verify(refreshTokenDB, REFRESH_JWT, (err, decoded) => {
    if (err || foundUser.username !== decoded.username)
      return next(ERROR(403, "invalid token"));
    const role = Object.values(foundUser.role).filter(Boolean);
    const accessToken = jwt.sign(
      {
        "username": decoded.username,
        "role": role,
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