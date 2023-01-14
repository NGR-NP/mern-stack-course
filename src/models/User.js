const mongoose = require("mongoose");
const { User, Admin } = require("../constants/roles");
// const { ADMIN, USER } = require("../constants/roles");
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: "username is required",
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
