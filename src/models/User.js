const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: "User Name is required",
      unique: true,
    },
    email: {
      type: String,
      required: "please enter your email",
      unique: true,
    },
    password: {
      type: String,
      required: "password is required",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
