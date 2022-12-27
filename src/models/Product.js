const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "please give your Product Titile",
    },
    desc: {
      type: String,
      required: "please give your Product Description",
    },
    img: {
      type: String,
      required: "please upload your Image Link",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
    color: {
      type: Array,
    },
    size: {
      Type: Array,
    },
    qty: {
      type: Number,
      required: "please enter your Product Quantity"
    },
    price: {
      type: Number,
      required: "please enter you Product Price",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", ProductSchema);