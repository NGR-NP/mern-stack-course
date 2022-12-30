const userRoutes = require("express").Router();
const { verifyAdmin, verifyUser } = require("../utils/verifytoken");
const {
  getUser,
  getUsers,
  deleteUser,
  updateUserPassword,
  updateUsername,
} = require("./user.controllers");

userRoutes.get("/:id", verifyUser, getUser);
userRoutes.delete("/:id", verifyUser, deleteUser);
userRoutes.put("/change/password/:id", verifyUser, updateUserPassword);
userRoutes.put("/change/username/:id", verifyUser, updateUsername);

userRoutes.get("/", verifyAdmin, getUsers);

module.exports = userRoutes;
