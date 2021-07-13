import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
        color: { type: String },
        colorName: { type: String },
        size: { type: String },
        sizeName: { type: String },
      },
    ],
    shippingAddress: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      address: { type: String, required: true },
      province: { type: String, required: true },
      phone: { type: String, required: true },
      socialReason: { type: String },
      ruc: { type: String },
      bill: { type: Boolean },
    },
    paymentMethod: {
      type: String,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
    isPriced: {
      type: Boolean,
      required: true,
      default: false,
    },
    pricedAt: {
      type: Date,
    },
    billNumber: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

orderSchema.pre('save', async function (next) {
  if (!this.billNumber) {
    this.billNumber = 10001;
    const orders = await Order.find({});
    if (orders.length > 0) {
      const maxNum = Math.max.apply(Math, orders.map(function (p) { return p.billNumber; }));
      if (maxNum) {
        this.billNumber = maxNum + 1;
      }
    }
  }
  next();
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
