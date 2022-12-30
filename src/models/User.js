const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: "username is required",
      unique: true,
    },
    email: {
      type: String,
      required: "E-mail is required",
      unique: true,
      match: [
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "please enter valid E-mail address",
      ],
    },
    password: {
      type: String,
      required: "passowrd is required",
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
      required: "Role is Required",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
