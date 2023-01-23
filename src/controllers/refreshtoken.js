const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { REFRESH_JWT, JWT } = require("../config/secrets");
const ERROR = require("../utils/error");

const genRefreshToken = async (req, res, next) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return next(ERROR(401, "cookie not avaliable"));
  const refreshToken = cookies.jwt;
  const foundUser = await User.findOne({ refreshToken });
  if (!foundUser) return next(ERROR(403, "token expire"));
  jwt.verify(refreshToken, REFRESH_JWT, (err, decoded) => {
    if (err || foundUser.username !== decoded.username)
      return next(ERROR(403, "invalid token"));
    const accessToken = jwt.sign(
      {
        id: decoded.id,
        email: decoded.email,
        username: decoded.username,
        role: decoded.role,
      },
      JWT,
      {
        expiresIn: "15s",
      }
    );
    res.json({ accessToken });
  });
};

module.exports = genRefreshToken;
