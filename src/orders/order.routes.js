const OrderRoutes = require("express").Router();
const { verifyRole, verifyCurrentUser } = require("../auth/auth.middleware");
const rolesList = require("../constants/roles");
const {
  CreateOrder,
  updateOrders,
  deleteOrder,
  getUserOrders,
  getAllOrders,
} = require("./order.controller");

OrderRoutes.get("/all", verifyRole(rolesList.Admin), getAllOrders);

// OrderRoutes.use(verifyCurrentUser);
OrderRoutes.post("/", CreateOrder);
OrderRoutes.put("/:id", updateOrders);
OrderRoutes.delete("/:id", deleteOrder);
OrderRoutes.get("/find/:id", getUserOrders);

module.exports = OrderRoutes;
