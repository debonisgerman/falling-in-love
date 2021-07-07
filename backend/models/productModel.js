import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    description: {
      type: String,
      required: true,
    },
    material: {
      type: String,
    },
    section: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    leading: {
      type: Boolean,
      default: false
    },
    size: {
      type: Array,
      required: false,
    },
    stock: {
      type: Number,
      required: false,
      default: 0
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
