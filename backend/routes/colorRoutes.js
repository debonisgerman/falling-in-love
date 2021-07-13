import express from "express";
const router = express.Router();
import {
    createColor,
    deleteColor,
    getColors,
    getColorById,
    updateColor
} from '../controllers/colorController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route("/").get(getColors).post(protect, admin, createColor);
router
    .route("/:id")
    .get(getColorById)
    .delete(protect, admin, deleteColor)
    .put(protect, admin, updateColor);

export default router;