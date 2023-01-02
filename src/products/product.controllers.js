const Product = require("../models/Product");
const ERROR = require("../utils/error");

///______##### CRUD #####______\\\

// #C
const createProduct = async (req, res, next) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res
      .status(200)
      .json({ message: "New Product added", product: savedProduct });
  } catch (err) {
    next(err);
  }
};
// #R
const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    if (!products) return next(ERROR(400, "Products not  available"));
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};
// #R (id)
const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return next(ERROR(400, "Product not  available"));
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};
// #U
const updateProduct = async (req, res, next) => {
  try {
    const updateProductById = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ message: "Product Updated", updateProductById });
  } catch (err) {
    next(err);
  }
};
//  #D
const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "product has been deleted successfully" });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  createProduct,
  getProductById,
  getProducts,
  updateProduct,
  deleteProduct,
};
