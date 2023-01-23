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
  const newQuery = req.query.new;
  const categoryQuery = req.query.category;

  const products = await Product.find();
  if (!products) return next(ERROR(400, "no products"));

  try {
    let Products;

    if (newQuery) {
      Products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (categoryQuery) {
      Products = await Product.find({
        category: {
          $in: [categoryQuery],
        },
      });
    } else {
      Products = await Product.find();
    }

    res.status(200).json(Products);
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
