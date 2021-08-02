import asyncHandler from "express-async-handler";
import Department from "../models/departmentModel.js";

// @desc Fetch all departments
// @route GET /api/departments
// @access Public
const getDepartments = asyncHandler(async (req, res) => {
    const departments = await Department.find({});
    res.json(departments);
});

export {
    getDepartments,
}