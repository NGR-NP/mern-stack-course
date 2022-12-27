const { register, login } = require("./auth.controllers");

const authRoute = require("express").Router();

authRoute.post("/register", register);
authRoute.post("/login", login);

module.exports = authRoute;
