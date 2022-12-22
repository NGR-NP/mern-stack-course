const route = require("express").Router();
const authRoute = require("./authRoutes");
const productRoutes = require("../products/product.routes");

route.use("/users", authRoute);
route.use("/products", productRoutes);

module.exports = route;
