const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "title is required",
    },
    desc: {
      type: String,
      required: "description is required",
    },
    img: {
      type: String,
      required: "image is required",
    },
    category: {
      type: Array,
      required: "category is required",
    },
    color: {
      type: Array,
    },
    size: {
      type: Array,
    },
    qty: {
      type: Number,
      required: "quantity is required",
    },
    price: {
      type: Number,
      required: "price is required",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductSchema);
