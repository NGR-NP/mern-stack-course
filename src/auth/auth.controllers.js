const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT } = require("../config/secrets");
const User = require("../models/User");
const register = async (req, res, next) => {
  try {
    const emailExist = await User.findOne({ email: req.body.email });
    const usernameExist = await User.findOne({ username: req.body.username });
    if (usernameExist) {
      const err = new Error();
      err.status = 400;
      err.message = "username is already taken";
      return next(err);
    }
    if (emailExist) {
      const err = new Error();
      err.status = 400;
      err.message = "email already exist";
      return next(err);
    }
    const salt = bcrypt.genSaltSync(5);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(200).json("user created successfully");
  } catch (err) {
    next(err);
  }
};
const login = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    const err = new Error();
    err.status = 400;
    err.message = "username and Password is required";
    return next(err);
  }
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      const err = new Error();
      err.status = 400;
      err.message = "wrong credentials 1";
      return next(err);
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      const err = new Error();
      err.status = 400;
      err.message = "wrong credentials 2";
      return next(err);
    }

    const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, JWT, {
      expiresIn: "1h",
    });
    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      // .cookie("access_token", accessToken, { httpOnly: true })
      .status(200)
      .json({ ...otherDetails, accessToken });
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login };
