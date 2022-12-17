const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
    },
    color: {
      type: String,
    },
    size: {
      Type: String,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timeseries: true }
);

module.exports = mongoose.model("product", ProductSchema);
