import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import hmacSHA256 from 'crypto-js/hmac-sha256.js';
import Hex from 'crypto-js/enc-hex.js';
import sendMail from "../utils/mailer.js";
import sendMailShipping from "../utils/shippingmailer.js"
import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";
import sendMailPriced from "../utils/pricedMailer.js";

import { createFormToken } from "../utils/createPayment.js";

// @desc Create new Order
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    pricedAt,
    isPriced,
    uUId,
    paymentMethod,
    totalPrice,
    shippingPrice } = req.body;
  if (orderItems && orderItems.length === 0)
  {
    res.status(400);
    throw new Error("No order items");
  } else
  {
    const order = new Order({
      orderItems,
      shippingAddress,
      pricedAt,
      isPriced,
      uUId,
      paymentMethod,
      totalPrice,
      shippingPrice
    });

    let createdOrder = await order.save();
    const newOrder = await Order.findById(createdOrder._id).populate(
      "orderItems.product"
    );
    createdOrder = await createdOrder.populate("orderItems.product");

    for (let i in orderItems)
    {
      console.log(orderItems[i]);
      const product = await Product.findById(orderItems[i].product);
      const productVariant = product.variants.find(v => v.color == orderItems[i].color);
      if (productVariant)
      {
        const variantSize = productVariant.sizes.find(x => x.size == orderItems[i].size);
        if (variantSize)
        {
          variantSize.stock = variantSize.stock - orderItems[i].qty;
        }
      }
      await product.save();
    }

    sendMail(shippingAddress, newOrder, newOrder.orderItems);

    res.status(201).json(createdOrder);
  }
});

// @desc Get Order by ID
// @route GET /api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order)
  {
    res.json(order);
  } else
  {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc Get Last order Number
// @route GET /api/lastOrderNumber/
// @access Public
const getLastOrderNumber = asyncHandler(async (req, res) => {
  const order = await Order.findOne({}, {}, { sort: { 'billNumber': -1 } });

  if (order)
  {
    const billNumber = +(order.billNumber) + 1;
    res.json({
      billNumber
    });
  } else
  {
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

  if (order)
  {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else
  {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc Update Order to delivered
// @route PUT /api/orders/:id/deliver
// @access Private
const updateOrderToPriced = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order)
  {
    order.isPriced = true;
    order.pricedAt = Date.now();
    const updatedOrder = await order.save();

    sendMailPriced(order);

    res.json(updatedOrder);
  } else
  {
    throw new Error("Order not found");
  }
});

// @desc Update Order to shipped
// @route PUT /api/orders/:id/ship
// @access Private
const updateOrderToShipped = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order)
  {
    order.isShipping = true;
    order.shippedAt = Date.now();
    const updatedOrder = await order.save();
    res.json(updatedOrder);
    sendMailShipping(order.shippingAddress, order)
  } else
  {
    throw new Error("Order not found");
  }
});

const createPayment = asyncHandler(async (req, res) => {
  const paymentConf = req.body.paymentConf

  try
  {
    const formToken = await createFormToken(paymentConf)
    res.send(formToken)
  } catch (error)
  {
    res.status(500).send(error)
  }
})

const validatePayment = asyncHandler(async (req, res) => {
  const answer = req.body.clientAnswer
  const hash = req.body.hash
  const answerHash = Hex.stringify(
    hmacSHA256(JSON.stringify(answer), process.env.IZIPAY_HMAC_SHA)
  )
  if (hash === answerHash) res.status(200).send('Valid payment')
  else res.status(500).send('Payment hash mismatch')
});

export {
  addOrderItems,
  getOrderById,
  getMyOrders,
  getOrders,
  getLastOrderNumber,
  updateOrderToDelivered,
  updateOrderToPriced,
  updateOrderToShipped,
  createPayment,
  validatePayment,
};
