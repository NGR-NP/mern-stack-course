const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { REFRESH_JWT, JWT } = require("../config/secrets");
const ERROR = require("../utils/error");

const genRefreshToken = async (req, res, next) => {
  // const cookies = req.cookies;
  // if (!cookies?.jwt) return next(ERROR(401, "cookie not avaliable"));
  // const refreshToken = cookies.jwt;
  // const foundUser = await User.findOne({ refreshToken });
  // if (!foundUser) return next(ERROR(403, "token expire"));
  // jwt.verify(refreshToken, REFRESH_JWT, (err, decoded) => {
  //   if (err || foundUser.username !== decoded.username)
  //     return next(ERROR(403, "invalid token"));
  //   // const role = Object.values(foundUser.role).filter(Boolean);
  //   const accessToken = jwt.sign(
  //     {
  //       "id": decoded._id,
  //       "username": decoded.username,
  //       "role": decoded.role,
  //     },
  //     JWT,
  //     {
  //       expiresIn: "15s",
  //     }
  //   );
  //   res.json({ accessToken });
  // });


  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!foundUser) return next(ERROR(403, "expired")); //Forbidden 
  jwt.verify(
      refreshToken,
      REFRESH_JWT,
      (err, decoded) => {
          if (err || foundUser.username !== decoded.username) return next(ERROR(403, "invalid token"));;
          const roles = Object.values(foundUser.roles);
          const accessToken = jwt.sign(
              {
                      "username": decoded.username,
                      "role": role
              },
              process.env.ACCESS_TOKEN_SECRET,
              { expiresIn: '10s' }
          );
          res.json({ roles, accessToken })
      }
  );


};

module.exports = genRefreshToken;