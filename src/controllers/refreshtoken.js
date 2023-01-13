const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { REFRESH_JWT, JWT } = require("../config/secrets");
const ERROR = require("../utils/error");

const genRefreshToken = async (req, res, next) => {
//   const cookies = req.cookies;
//   if (!cookies?.jwt) return next(ERROR(401, "cookie not avaliable"));
//   const refreshToken = cookies.jwt;
//   const foundUser = await User.findOne({ refreshToken });
//   if (!foundUser) return next(ERROR(403, "token expire"));
//   jwt.verify(refreshToken, REFRESH_JWT, (err, decoded) => {
//     if (err || foundUser.username !== decoded.username)
//       return next(ERROR(403, "invalid token"));
//     // const role = Object.values(foundUser.role).filter(Boolean);
//     const accessToken = jwt.sign(
//       {
//         "id": decoded._id,
//         "username": decoded.username,
//         "role": decoded.role,
//       },
//       JWT,
//       {
//         expiresIn: "10s",
//       }
//     );
//     res.json({ accessToken });
//   });
// };

/// new

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    res.clearCookie('jwt', { httpOnly: true });

    const foundUser = await User.findOne({ refreshToken }).exec();

    // Detected refresh token reuse!
    if (!foundUser) {
        jwt.verify(
            refreshToken,
            REFRESH_JWT,
            async (err, decoded) => {
                if (err) return res.sendStatus(403); //Forbidden
                // Delete refresh tokens of hacked user
                const hackedUser = await User.findOne({ username: decoded.username }).exec();
                hackedUser.refreshToken = [];
                const result = await hackedUser.save();
            }
        )
        return res.sendStatus(403); //Forbidden
    }

    const newRefreshTokenArray = foundUser.refreshToken.filter(rt => rt !== refreshToken);

    // evaluate jwt 
    jwt.verify(
        refreshToken,
        REFRESH_JWT,
        async (err, decoded) => {
            if (err) {
                // expired refresh token
                foundUser.refreshToken = [...newRefreshTokenArray];
                const result = await foundUser.save();
            }
            if (err || foundUser.username !== decoded.username) return res.sendStatus(403);

            // Refresh token was still valid
            const accessToken = jwt.sign(
              {
                "id": decoded._id,
                "username": decoded.username,
                "role": decoded.role,
              },
              JWT,
              {
                expiresIn: "10s",
              }
            );

            const newRefreshToken = jwt.sign(
                { "username": foundUser.username },
                REFRESH_JWT,
                { expiresIn: '15s' }
            );
            foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
            const result = await foundUser.save();

            res.cookie('jwt', newRefreshToken, { httpOnly: true});

            res.json({ accessToken })
        }
    );
}

module.exports = genRefreshToken;