import express from "express";
const router = express.Router();
import {
    createSize,
    deleteSize,
    getSizes,
    getSizeById,
    updateSize
} from '../controllers/sizeController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route("/").get(getSizes).post(protect, admin, createSize);
router
    .route("/:id")
    .get(getSizeById)
    .delete(protect, admin, deleteSize)
    .put(protect, admin, updateSize);

export default router;