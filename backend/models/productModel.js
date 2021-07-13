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
      ref: "Category",
    },
    related: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    description: {
      type: String,
      required: true,
    },
    material: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Material",
    }],
    section: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
    }],
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
    },
    stock: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
    },
    published: {
      type: Boolean,
      default: false,
    },
    variants: [{
      color: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Color",
      },
      images: [String],
      sizes: [{
        size: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Size"
        },
        stock: {
          type: Number,
          default: 0,
        }
      }]
    }]
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
