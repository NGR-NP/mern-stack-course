const mongoose = require("mongoose");
const { User, Admin } = require("../constants/roles");
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: "username is required",
      match: [
        /^[A-z][A-z0-9-_]{2,15}$/,
        "username must has at list 3 characters",
      ],
      unique: true,
    },
    email: {
      type: String,
      required: "email is required",
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "inValid Email address",
      ],
    },
    password: {
      type: String,
      required: "passowrd is required",
      // match: [
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
      //   " At list 8 to 24 characters.Must have uppercase & lowercase letters, number and a special character: ! @ # $ %",
      // ],
    },
    role: {
      type: [Number],
      enum: [Admin, User],
      default: User,
      required: "Role is required",
    },
    refreshToken: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
