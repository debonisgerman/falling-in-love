import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import sendMail from "../utils/mailer.js";
import Order from "../models/orderModel.js";

// @desc Create new Order
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
  const { orderItems, shippingAddress } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new Order({
      orderItems,
      shippingAddress,
    });

    let createdOrder = await order.save();
    const newOrder = await Order.findById(createdOrder._id).populate(
      "orderItems.product"
    );
    createdOrder = await createdOrder.populate("orderItems.product");

    sendMail(shippingAddress, newOrder._id, newOrder.orderItems);

    res.status(201).json(createdOrder);
  }
});

// @desc Get Order by ID
// @route GET /api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc Get logged in user orders
// @route GET /api/orders/myorders
// @access Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

// @desc Get all orders
// @route GET /api/orders
// @access Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate("user", "id name");
  res.json(orders);
});

// @desc Update Order to delivered
// @route PUT /api/orders/:id/deliver
// @access Private
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc Update Order to delivered
// @route PUT /api/orders/:id/deliver
// @access Private
const updateOrderToPriced = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPriced = true;
    order.pricedAt = Date.now();
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    throw new Error("Order not found");
  }
});

export {
  addOrderItems,
  getOrderById,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
  updateOrderToPriced,
};
