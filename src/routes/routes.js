const route = require("express").Router();
const authRoute = require("../auth/auth.routes");
const productRoutes = require("../products/product.routes");

route.use("/auth", authRoute);
route.use("/products", productRoutes);

module.exports = route;