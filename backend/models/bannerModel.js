import mongoose from "mongoose";

const BannerSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    imageDesktop: {
      type: String,
      required: true,
    },
    imageTablet: {
      type: String,
      required: true,
    },
    imageMobile: {
      type: String,
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

const Banner = mongoose.model("Banner", BannerSchema);

export default Banner;
