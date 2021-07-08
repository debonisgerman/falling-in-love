import asyncHandler from "express-async-handler";
import Banner from "../models/bannerModel.js";

// @desc Fetch all banners
// @route GET /api/banners
// @access Public
const getBanners = asyncHandler(async (req, res) => {
  const banners = await Banner.find({});
  res.json(banners);
});

// @desc Delete banner
// @route DELETE /api/banners/:id
// @access Private/Admin
const deleteBanner = asyncHandler(async (req, res) => {
  const banner = await Banner.findById(req.params.id);

  if (banner) {
    await banner.remove();
    res.json({ message: "Banner removed" });
  } else {
    res.status(404);
    throw new Error("Banner not found");
  }
});

// @desc Create banner
// @route POST /api/banners
// @access Private/Admin
const createBanner = asyncHandler(async (req, res) => {
  const banner = new Banner({
    user: req.user._id,
    imageDesktop: "/images/logo.png",
    imageTablet: "/images/logo.png",
    imageMobile: "/images/logo.png",
    show: false,
  });

  const createdBanner = await banner.save();
  res.status(201).json(createdBanner);
});

// @desc Update product
// @route PUT /api/banners/:id
// @access Private/Admin
const updateBanner = asyncHandler(async (req, res) => {
  const { imageDesktop, imageTablet, imageMobile, show } = req.body;

  const banner = await Banner.findById(req.params.id);

  if (banner) {
    banner.imageDesktop = imageDesktop;
    banner.imageTablet = imageTablet;
    banner.imageMobile = imageMobile;
    banner.show = show;

    const updatedBanner = await banner.save();
    res.json(updatedBanner);
  } else {
    res.status(404);
    throw new Error("Banner not found");
  }
});

// @desc Fetch single banner
// @route GET /api/banners/:id
// @access Public
const getBannerById = asyncHandler(async (req, res) => {
    const banner = await Banner.findById(req.params.id);
  
    if (banner) {
      res.json(banner);
    } else {
      res.status(404);
      throw new Error("Banner not found");
    }
  });

export {
    getBanners,
    getBannerById,
    deleteBanner,
    createBanner,
    updateBanner
};
