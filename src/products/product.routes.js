const productRoutes = require("express").Router();
const { verifyRole, verifyJwt } = require("../auth/auth.middleware");
const rolesList = require("../constants/roles");
const {
  createProduct,
  getProductById,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("./product.controllers");

productRoutes.get("/", getProducts);
productRoutes.get("/:id", getProductById);
productRoutes.use(verifyJwt);
productRoutes.post("/", verifyRole(rolesList.Admin), createProduct);
productRoutes.put("/:id", verifyRole(rolesList.Admin), updateProduct);
productRoutes.delete("/:id", verifyRole(rolesList.Admin), deleteProduct);

module.exports = productRoutes;
