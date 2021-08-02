import express from "express";
const router = express.Router();
import {
    getDepartments,
} from '../controllers/departmentController.js';

router.route("/").get(getDepartments);

export default router;