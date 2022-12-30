const cgpassword = require("express").Router();
const { verifyUser } = require("../utils/verifytoken");
const { updateUser } = require("./user.controllers");

cgpassword.put("/:id", verifyUser, updateUser);

module.exports = cgpassword;
