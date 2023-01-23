const CartRoutes = require("express").Router();
const { verifyRole, verifyCurrentUser } = require("../auth/auth.middleware");
const rolesList = require("../constants/roles");
const {
  CreateCart,
  updateCarts,
  deleteCart,
  getUserCarts,
  getAllCarts,
} = require("./Cart.controllers");

CartRoutes.get("/all", verifyRole(rolesList.Admin), getAllCarts);

CartRoutes.use(verifyCurrentUser);
CartRoutes.post("/", CreateCart);
CartRoutes.put("/:id", updateCarts);
CartRoutes.delete("/:id", deleteCart);
CartRoutes.get("/find/:id", getUserCarts);

module.exports = CartRoutes;
