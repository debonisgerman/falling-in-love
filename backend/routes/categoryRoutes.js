import express from "express";
const router = express.Router();
import {
    createCategory,
    deleteCategory,
    getCategories,
    getCategoryById,
    updateCategory
} from '../controllers/categoryController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route("/").get(getCategories).post(protect, admin, createCategory);
router
    .route("/:id")
    .get(getCategoryById)
    .delete(protect, admin, deleteCategory)
    .put(protect, admin, updateCategory);

export default router;