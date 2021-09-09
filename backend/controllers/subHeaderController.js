import asyncHandler from "express-async-handler";
import SubHeader from "../models/subHeaderModel.js";
import Product from "../models/productModel.js";

// @desc Fetch all subHeaders
// @route GET /api/subHeaders
// @access Public
const getSubHeaders = asyncHandler(async (req, res) => {
    const subHeaders = await SubHeader.find({});
    res.json(subHeaders);
});

// @desc Fetch single subHeader
// @route GET /api/subHeaders/:id
// @access Public
const getSubHeaderById = asyncHandler(async (req, res) => {
    const subHeader = await SubHeader.findById(req.params.id);

    if (subHeader) {
        res.json(subHeader);
    } else {
        res.status(404);
        throw new Error("SubHeader not found");
    }
});

// @desc Delete subHeader
// @route DELETE /api/subHeaders/:id
// @access Private/Admin
const deleteSubHeader = asyncHandler(async (req, res) => {
    const subHeader = await SubHeader.findById(req.params.id);

    if (subHeader) {
        await subHeader.remove();
        res.json({ message: "SubHeader removed" });
    } else {
        res.status(404);
        throw new Error("SubHeader not found");
    }
});

// @desc Create SubHeader
// @route POST /api/subHeaders
// @access Private/Admin
const createSubHeader = asyncHandler(async (req, res) => {
    const subHeader = new SubHeader({
        description: 'descripción',
        show: false,
    });

    const createdSubHeader = await subHeader.save();
    res.status(201).json(createdSubHeader);
});

// @desc Update subHeader
// @route PUT /api/subHeaders/:id
// @access Private/Admin
const updateSubHeader = asyncHandler(async (req, res) => {
    const {
        show,
        description,
    } = req.body;

    const subHeader = await SubHeader.findById(req.params.id);

    if (subHeader) {
        subHeader.show = show;
        subHeader.description = description;

        const updateSubHeader = await subHeader.save();
        res.json(updateSubHeader);
    } else {
        res.status(404);
        throw new Error("SubHeader not found");
    }
});

export {
    getSubHeaders,
    getSubHeaderById,
    deleteSubHeader,
    createSubHeader,
    updateSubHeader
}