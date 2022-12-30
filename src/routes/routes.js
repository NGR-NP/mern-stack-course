const route = require("express").Router();
const authRoute = require("../auth/auth.routes");
const productRoutes = require("../products/product.routes");
const userRoutes = require("../users/user.routes");

route.use("/auth", authRoute);
route.use("/products", productRoutes);
route.use("/users", userRoutes);

module.exports = route;
