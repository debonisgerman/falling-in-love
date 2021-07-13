import express from "express";
const router = express.Router();
import {
    createMaterial,
    deleteMaterial,
    getMaterials,
    getMaterialById,
    updateMaterial
} from '../controllers/materialController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route("/").get(getMaterials).post(protect, admin, createMaterial);
router
    .route("/:id")
    .get(getMaterialById)
    .delete(protect, admin, deleteMaterial)
    .put(protect, admin, updateMaterial);

export default router;