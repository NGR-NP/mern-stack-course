const User = require("../models/User");
const bcrypt = require("bcryptjs");

/*      ####CRUD####     */

//   #READ (all)
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

// #READ (id)
const getUser = async (req, res, next) => {
  try {
    const getUserById = await User.findById(req.params.id);
    res.status(200).json(getUserById);
  } catch (err) {
    next(err);
  }
};

// #UPDATE
// const updateUser = async (req, res, next) => {
//   try {
//     const updateUserById = await User.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     res.status(200).json(updateUserById);
//   } catch (err) {
//     next(err);
//   }
// };
// https://www.w3schools.com/nodejs/nodejs_mongodb_update.asp
const updateUsername = async (req, res, next) => {
  try {
    const updateUserById = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { username: req.body.username } },
      { new: true }
    );
    res.status(200).json(updateUserById); 
  } catch (err) {
    next(err);
  }
};

const updateUserPassword = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(5);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const updateUserById = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { password: hash } },
      { new: true }
    );
    res.status(200).json(updateUserById);
  } catch (err) {
    next(err);
  }
};



// DELETE
const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("user has been deleted successfully");
  } catch (err) {
    next(err);
  }
};
module.exports = {
  deleteUser,
  updateUserPassword,
  updateUsername,
  getUser,
  getUsers,
};
