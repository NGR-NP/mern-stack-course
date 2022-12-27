const Product = require("../models/Product");

///______##### CRUD #####______\\\

// #C
const createProduct = async (req, res, next) => {
  const newProduct = new Product(req.body);
  try {
    const saveProduct = await newProduct.save();
    res.status(200).json(saveProduct);
  } catch (err) {
    next(err);
  }
};
// #R
const pullProducts = async (_req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};
// #R (id)
const pullProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};
// #U
const updateProductById = async (req, res, next) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateProduct);
  } catch (err) {
    next(err);
  }
};
//  #D
const deleteProductById = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("product has been deleted successfully");
  } catch (err) {
    next(err);
  }
};
module.exports = {
  createProduct,
  pullProductById,
  pullProducts,
  updateProductById,
  deleteProductById,
};
