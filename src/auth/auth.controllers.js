const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT } = require("../config/secrets");
const User = require("../models/User");

const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(5);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(200).send("user created successfully");
  } catch (err) {
    next(err);
  }
};
const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createErrot(200, "wrong credincals"));

    const isPasswordCorrect = bcrypt.compare(req.body.password, user.password);
    if (!isPasswordCorrect) return next(createError(400, "wrong credincals"));
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, JWT);
    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};
module.exports = { register, login };
