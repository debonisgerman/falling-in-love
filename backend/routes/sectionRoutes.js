import express from "express";
const router = express.Router();
import {
    createSection,
    deleteSection,
    getSections,
    getSectionById,
    updateSection
} from '../controllers/sectionController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route("/").get(getSections).post(protect, admin, createSection);
router
    .route("/:id")
    .get(getSectionById)
    .delete(protect, admin, deleteSection)
    .put(protect, admin, updateSection);

export default router;