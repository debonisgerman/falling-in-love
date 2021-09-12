import express from "express";
const router = express.Router();
import {
    createSubHeader,
    deleteSubHeader,
    getSubHeaders,
    getSubHeaderById,
    updateSubHeader
} from '../controllers/subHeaderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route("/").get(getSubHeaders).post(protect, admin, createSubHeader);
router
    .route("/:id")
    .get(getSubHeaderById)
    .delete(protect, admin, deleteSubHeader)
    .put(protect, admin, updateSubHeader);


export default router;