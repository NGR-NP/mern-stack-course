const route = require("express").Router();
const authRoute = require("./authRoutes");
const productRoute = require("./products");

route.use("/users", authRoute);
route.use("/products", productRoute);

module.exports = route;
