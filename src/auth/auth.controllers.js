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
      return next(ERROR(400, "username is already taken"));
    }
    if (emailExist) return next(ERROR(400, "Email is already registered"));
    const salt = bcrypt.genSaltSync(5);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: username,
      email: email,
      password: hash,
    });
    await newUser.save();
    res.status(200).json({
      message: `${newUser.username} your Account is Created Successfully`,
    });
  } catch (err) {
    next(err);
  }
};
const login = async (req, res, next) => {
  const { username, password } = req.body;
  const reqPassword = password;
  if (!username) return next(ERROR(400, "enter your Username"));
  if (!reqPassword) return next(ERROR(400, "enter your Password"));

  const wrgMsg = ERROR(400, "Wrong credentials!");
  const foundUser = await User.findOne({ username });
  if (!foundUser) return next(wrgMsg);

  const isPasswordCorrect = bcrypt.compare(reqPassword, foundUser.password);
  if (!isPasswordCorrect) {
    return next(wrgMsg);
  }
  if (isPasswordCorrect) {
    const role = Object.values(foundUser.role).filter(Boolean);
    const accessToken = jwt.sign(
      {
        username: foundUser.username,
        role: role,
      },
      JWT,
      {
        expiresIn: "30s",
      }
    );
    const refreshToken = jwt.sign(
      {
        username: foundUser.username,
        role: role,
      },
      REFRESH_JWT,
      { expiresIn: "2m" }
    );

    foundUser.refreshTokenDB = refreshToken;
    const result = await foundUser.save();
    const { password, refreshTokenDB, ...otherDetails } = result._doc;
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
    });
    res.json({
      message: `Welcome Back ${result.username}`,
      ...otherDetails,
      accessToken,
    });
  } else {
    res.sendStatus(401);
  }
};
module.exports = { register, login };
