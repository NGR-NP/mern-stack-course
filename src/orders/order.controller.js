const Order = require("../models/Order");
const ERROR = require("../utils/error");

const CreateOrder = async (req, res, next) => {
  const { id, products, amount, address } = req.body

  const productArray = [];

  products.forEach(product => {
    const { productId, qty, color, size } = product;
    productArray.push({ productId, qty, color, size });
  });
  try {
    const newOrder = new Order({
      userId: id,
      products: productArray,
      address,
      amount,
    });
    const saveOrder = await newOrder.save();
    res.status(200).json(saveOrder);
  } catch (err) {
    next(err);
  }
};
const updateOrders = async (req, res, next) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    next(err);
  }
};
const deleteOrder = async (req, res, next) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "order canceled!" });
  } catch (err) {
    next(err);
  }
};
const getUserOrders = async (req, res, next) => {
  try {
    const userOrder = await Order.find(req.params.id);
    res.status(200).json(userOrder);
  } catch (err) {
    next(err);
  }
};
const getAllOrders = async (req, res, next) => {
  try {
    const Orders = await Order.find();
    res.status(200).json(Orders);
  } catch (err) {
    next(err);
  }
};

const revenue = async (req, res, next) => {
  // current date and time
  const date = new Date();

  console.log(date);
  // set date and time one month before the ^current date and time
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  console.log(lastMonth);

  // set date and time two months before the current date and time
  //  const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 13));
  const prevMonth = new Date(date.setMonth(lastMonth.getMonth() - 1));

  console.log(prevMonth);

  try {
    const income = await Order.aggregate([
      {
        $match: { createdAt: { $gte: prevMonth } },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);

    res.status(200).json(income);
  } catch (err) {
    next(err);
  }
};
module.exports = {
  CreateOrder,
  updateOrders,
  deleteOrder,
  getAllOrders,
  getUserOrders,
  revenue,
};
