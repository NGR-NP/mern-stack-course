const User = require("../models/User");
const bcrypt = require("bcryptjs");
const ERROR = require("../utils/error");

/*      ####CRUD####     */

const createUser = async (req, res, next) => {
  const { username, email, password, role } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All feilds are Required" });
    }

    const usernameExist = await User.findOne({ username });
    const emailExist = await User.findOne({ email });
    if (usernameExist) {
      return res.status(409).json({ message: "Username is Already Taken" });
    } else if (emailExist) {
      return res.status(409).json({ message: "Emaill already Registered" });
    }
    const salt = bcrypt.genSaltSync(5);
    const hash = bcrypt.hashSync(password, salt);
    const newObj = { username, email, password: hash, role };
    if (newObj) {
      const newUser = await User.create(newObj);
      const { password, ...otherDetails } = newUser._doc;
      res
        .status(201)
        .json({ message: `New user ${username} Created`, ...otherDetails });
    } else {
      res.status(400).json({ message: "Invalid DATA" });
    }
  } catch (err) {
    next(err);
  }
};

//   #READ (all)
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password","-refreshToken" );
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

// #READ (id)
const getUser = async (req, res, next) => {
  try {
    const getUserById = await User.findById(req.params.id).select("-password");
    res.status(200).json(getUserById);
  } catch (err) {
    next(err);
  }
};

//
const updateUsername = async (req, res, next) => {
  const { username } = req.body;
  try {
    const usernameExist = await User.findOne({ username }, "-password");
    if (usernameExist) {
      return next(ERROR(409, "Username is Already Exist"));
    }
    const updateUserById = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { username: username } },
      { new: true }
    );

    res.status(200).json({
      message: `Username ${updateUserById.username} updated successfully`,
    });
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

// const updateUser = async (req, res, next) => {
//   const { id, username, email, password } = req.body;
//   try {
//     const user = await User.findById(id);
//     if (!user) {
//       return res.status(400).json({ message: "User not Found" });
//     }
//     const duplicate = await User.findOne({ username });
//     if (duplicate && duplicate?._id.toString() !== id) {
//       return res.status(409).json({ message: "Username alredy Taken" });
//     }
//     user.username = username;
//     user.email = email;
//     if (password) {
//       user.password = await bcrypt.hashSync(password, saltNum);
//     }
//     const updatedUser = await user.save();
//     res.json({ message: `${updatedUser.username} updated` });
//   } catch (err) {
//     next(err);
//   }
// };

// DELETE
const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id) {
      return next(ERROR(400, "User id Required"));
    }
    const user = await User.findById(id);
    if (!user) {
      return next(ERROR(400, "User not Found"));
    }
    const deleteuser = await User.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: `user ${deleteuser.username} Deleted successfully` });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  createUser,
  deleteUser,
  updateUserPassword,
  updateUsername,
  getUser,
  getUsers,
};
