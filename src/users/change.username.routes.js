const { verifyUser } = require("../utils/verifytoken");
const { updateUsername } = require("./user.controllers");

const changeUsernameRoute = require("express").Router();

changeUsernameRoute.put("/:id", verifyUser, updateUsername);

module.exports = changeUsernameRoute;
