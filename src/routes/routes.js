const route = require("express").Router();
const { verifyCurrentUser, verifyJwt } = require("../auth/auth.middleware");
const authRoute = require("../auth/auth.routes");
const logout = require("../auth/logout.controllers");
const me = require("../auth/me");
const genRefreshToken = require("../controllers/refreshtoken");
const productRoutes = require("../products/product.routes");
const userRoutes = require("../users/user.routes");

route.use("/auth", authRoute);
route.use("/products", productRoutes);
route.use("/users", userRoutes);
route.get("/refresh", genRefreshToken);
route.get("/logout", logout);
//route.use(verifyJwt);
route.get("/me/:id",  me);

module.exports = route;
