const route = require("express").Router();
const { verifyJwt, verifyRole,verifyCurrentUser } = require("../auth/auth.middleware");
const authRoute = require("../auth/auth.routes");
const logout = require("../auth/logout.controllers");
const me = require("../auth/me");
const CartRoutes = require("../cart/Cart.routes");
const rolesList = require("../constants/roles");
const genRefreshToken = require("../controllers/refreshtoken");
const { revenue } = require("../orders/order.controller");
const OrderRoutes = require("../orders/order.routes");
const productRoutes = require("../products/product.routes");
const userRoutes = require("../users/user.routes");

route.use("/auth", authRoute);
route.use("/products", productRoutes);
route.use("/users", userRoutes);
route.get("/refresh", genRefreshToken);


route.use(verifyJwt);
route.use("/carts", CartRoutes);
route.use("/orders", OrderRoutes);
route.get("/revenue", verifyRole(rolesList.Admin), revenue);
route.get("/me/:id", verifyCurrentUser,  me);
route.get("/logout", verifyCurrentUser, logout);

module.exports = route;
