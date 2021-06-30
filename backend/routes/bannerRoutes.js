import express from "express";
const router = express.Router();
import {
  createBanner,
  deleteBanner,
  getBanners,
  updateBanner,
  getBannerById,
} from "../controllers/bannerController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getBanners).post(protect, admin, createBanner);
router
  .route("/:id")
  .get(getBannerById)
  .delete(protect, admin, deleteBanner)
  .put(protect, admin, updateBanner);

export default router;
