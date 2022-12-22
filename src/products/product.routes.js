const {
  createProduct,
  pullProductById,
  pullProducts,
  updateProductById,
  deleteProductById,
} = require("./product.controllers");

const productRoutes = require("express").Router();

productRoutes.post("/", createProduct);

productRoutes.get("/:id", pullProductById);

productRoutes.get("/", pullProducts);

productRoutes.put("/:id", updateProductById);

productRoutes.delete("/:id", deleteProductById);

module.exports = productRoutes;
