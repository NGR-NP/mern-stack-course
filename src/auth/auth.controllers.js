// const ERROR = require("../utils/error");
// const AuthService = require("./index");
// const register = async (req, res, next) => {
//   const { email, username, password } = req.body;
//   if (!email) {
//     return next(ERROR(400, "enter your email"));
//   } else if (!username) {
//     return next(ERROR(400, "enter your username"));
//   } else if (!password) {
//     return next(ERROR(400, "enter you password"));
//   }
//   try {
//     const registeredUser = await AuthService.registerNewUser(
//       username,
//       email,
//       password
//     );
//     res.status(200).json({
//       message: `${registeredUser.username} your Account is Created Successfully`,
//       registeredUser,
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// const login = async (req, res, next) => {
//   const { email, password } = req.body;
//   const Reqpassword = password;
//   if (!email) {
//     return next(ERROR(400, "enter your Email or Username"));
//   } else if (!password) {
//     return next(ERROR(400, "enter your Password"));
//   }
//   try {
//     const { token, refreshToken, LoggedInUser } =
//       await AuthService.attemptLogin(email, Reqpassword);
//     res.json({
//       message: `Welcome Back ${LoggedInUser.username}`,
//       user: LoggedInUser,
//       token,
//       refreshToken,
//     });
//   } catch (err) {
//     return next(err);
//   }
// };
// const me = (req, res) => {
//   const { user } = req;
//   return res.status(200).json({
//     user,
//   });
// };
// module.exports = { register, login, me };

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT, REFRESH_JWT } = require("../config/secrets");
const User = require("../models/User");
const ERROR = require("../utils/error");
const register = async (req, res, next) => {
  const { email, username, password } = req.body;
  if (!email) {
    return next(ERROR(400, "enter your email"));
  } else if (!username) {
    return next(ERROR(400, "enter your username"));
  } else if (!password) {
    return next(ERROR(400, "enter you password"));
  }
  try {
    const emailExist = await User.findOne({ email: email });
    const usernameExist = await User.findOne({ username: username });
    if (usernameExist) {
      return next(ERROR(409, "username is already taken"));
    }
    if (emailExist) return next(ERROR(409, "Email is already registered"));
    const salt = bcrypt.genSaltSync(5);
    const hash = bcrypt.hashSync(req.body.password, salt);
    await User.create({
      username: username,
      email: email,
      password: hash,
    });
    res.status(201).json({
      message: `${username} Your account has been successfully created.`,
    });
  } catch (err) {
    next(err);
  }
};
const login = async (req, res, next) => {
  const cookies = req.cookies;
  if (!req.body.username) return next(ERROR(400, "enter your Username"));
  if (!req.body.password) return next(ERROR(400, "enter your Password"));

  try {
    const foundUser = await User.findOne({ username: req.body.username });
    if (!foundUser) {
      return next(ERROR(400, "Wrong credentials!"));
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      foundUser.password
    );
    if (!isPasswordCorrect) {
      return next(ERROR(400, "Wrong credentials!!"));
    }
    if (isPasswordCorrect) {
      // const role = Object.values(foundUser.role).filter(Boolean);
      // const accessToken = jwt.sign(
      //   {
      //     "id": foundUser._id,
      //     "username": foundUser.username,
      //     "role": foundUser.role,
      //   },
      //   JWT,
      //   {
      //     expiresIn: "10s",
      //   }
      // );
      // const refreshToken = jwt.sign(
      //   {
      //     "id": foundUser._id,
      //     "username": foundUser.username,
      //     "role": foundUser.role,
      //   },
      //   REFRESH_JWT,
      //   { expiresIn: "30s" }
      // );

      // foundUser.refreshToken = refreshToken;
      // const result = await foundUser.save();
      // res.cookie("jwt", refreshToken, {
      //   httpOnly: true,
      // });
      // res.status(200).json({
      //   message: `Welcome Back ${result.username}`,
      //   accessToken,
      // });



      const accessToken = jwt.sign(
        {
            "username": foundUser.username,
            "role": foundUser.role
        },
        JWT,
        { expiresIn: '10s' }
      );
      const newRefreshToken = jwt.sign(
        { "username": foundUser.username },
        REFRESH_JWT,
        { expiresIn: '15s' }
      );

      let newRefreshTokenArray =
        !cookies?.jwt
          ? foundUser.refreshToken
          : foundUser.refreshToken.filter(rt => rt !== cookies.jwt);

      if (cookies?.jwt) {
        const refreshToken = cookies.jwt;
        const foundToken = await User.findOne({ refreshToken }).exec();

        if (!foundToken) {
          newRefreshTokenArray = [];
        }

        res.clearCookie('jwt', { httpOnly: true});
      }

      foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
      const result = await foundUser.save();

      res.cookie('jwt', newRefreshToken, { httpOnly: true});

      res.json({ accessToken });



    }
  } catch (err) {
    next(err);
  }
};
module.exports = { register, login };
