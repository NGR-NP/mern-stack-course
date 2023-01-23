const Cart = require("../models/Cart");
const ERROR = require("../utils/error");

const CreateCart = async (req, res, next) => {
  const { userId, productId, qty } = req.body;
  // if (!userId) {
  //   return next(ERROR(401, "enter your userId"));
  // } else if (!productId) {
  //   return next(ERROR(401, "please add products"));
  // }
  try {
    const newCart = new Cart(
      // req.body
      {
      userId: userId,
      products: [
      {
      productId: productId,
      qty: qty,
      },
      ],
      }
    );
    const saveCart = await newCart.save();
    res.status(200).json(saveCart);
  } catch (err) {
    next(err);
  }
};
const updateCarts = async (req, res, next) => {
  const { productId, qty } = req.body;
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: { products: [productId, qty] },
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    next(err);
  }
};
const deleteCart = async (req, res, next) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "cart deleted successfully!" });
  } catch (err) {
    next(err);
  }
};
const getUserCarts = async (req, res, next) => {
  try {
    const userCart = await Cart.findOne(req.params.id);
    res.status(200).json(userCart);
  } catch (err) {
    next(err);
  }
};
const getAllCarts = async (req, res, next) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    next(err);
  }
};
module.exports = {
  CreateCart,
  updateCarts,
  deleteCart,
  getAllCarts,
  getUserCarts,
};
