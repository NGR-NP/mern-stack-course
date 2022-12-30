const { default: mongoose } = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "please enter Category name",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("category", CategorySchema);
