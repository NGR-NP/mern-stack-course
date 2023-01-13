const userRoutes = require("express").Router();
const {
  verifyJwt,
  verifyRole,
  verifyCurrentUser,
} = require("../auth/auth.middleware");
const rolesList = require("../constants/roles");
const {
  getUser,
  getUsers,
  deleteUser,
  updateUserPassword,
  updateUsername,
  createUser,
  updateUser,
} = require("./user.controllers");

userRoutes.use(verifyJwt);

userRoutes.post("/", verifyRole(rolesList.Admin), createUser);
userRoutes.get("/", verifyRole(rolesList.Admin), getUsers);
//userRoutes.get("/", getUsers);
userRoutes.get("/:id", verifyRole(rolesList.User), getUser);
userRoutes.delete("/:id", verifyRole(rolesList.Admin), deleteUser);
userRoutes.put("/:id", verifyRole(rolesList.Admin), updateUser);

userRoutes.put(
  "/change/username/:id",
  verifyCurrentUser,
  verifyRole(rolesList.User),
  updateUsername
);
userRoutes.put(
  "/change/password/:id",
  verifyCurrentUser,
  verifyRole(rolesList.User),
  updateUserPassword
);

module.exports = userRoutes;
