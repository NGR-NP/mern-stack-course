const { verifyAdmin } = require("../utils/verifytoken");
const {
  createProduct,
  getProductById,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("./product.controllers");

const productRoutes = require("express").Router();

productRoutes.post("/", verifyAdmin, createProduct);

productRoutes.get("/:id", getProductById);

productRoutes.get("/", getProducts);

productRoutes.put("/:id", verifyAdmin, updateProduct);

productRoutes.delete("/:id", verifyAdmin, deleteProduct);

module.exports = productRoutes;
