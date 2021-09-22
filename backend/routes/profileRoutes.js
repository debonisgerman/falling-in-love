import express from "express";
const router = express.Router();
import {
    createProfile,
    deleteProfile,
    getProfiles,
    getProfileById,
    updateProfile
} from '../controllers/profileController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route("/").get(getProfiles).post(protect, admin, createProfile);
router
    .route("/:id")
    .get(getProfileById)
    .delete(protect, admin, deleteProfile)
    .put(protect, admin, updateProfile);

export default router;