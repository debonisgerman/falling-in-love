import asyncHandler from "express-async-handler";
import Color from "../models/colorModel.js";
import Product from "../models/productModel.js";

// @desc Fetch all colors
// @route GET /api/colors
// @access Public
const getColors = asyncHandler(async (req, res) => {
    const colors = await Color.find({});
    res.json(colors);
});

// @desc Fetch single color
// @route GET /api/colors/:id
// @access Public
const getColorById = asyncHandler(async (req, res) => {
    const color = await Color.findById(req.params.id);

    if (color) {
        res.json(color);
    } else {
        res.status(404);
        throw new Error("Color not found");
    }
});

// @desc Delete color
// @route DELETE /api/colors/:id
// @access Private/Admin
const deleteColor = asyncHandler(async (req, res) => {
    const color = await Color.findById(req.params.id);

    if (color) {

        let products = await Product.find({ 'variants.color': req.params.id });
        for (let p in products) {
            products[p].variants = products[p].variants.filter(v => v.color.toString() !== req.params.id.toString());
            await products[p].save();
        }

        await color.remove();
        res.json({ message: "Color removed" });
    } else {
        res.status(404);
        throw new Error("Color not found");
    }
});

// @desc Create Color
// @route POST /api/colors
// @access Private/Admin
const createColor = asyncHandler(async (req, res) => {
    const color = new Color({
        name: 'color',
        color: "#000000",
    });

    const createdColor = await color.save();
    res.status(201).json(createdColor);
});

// @desc Update color
// @route PUT /api/colors/:id
// @access Private/Admin
const updateColor = asyncHandler(async (req, res) => {
    const {
        name,
        color,
    } = req.body;

    const col = await Color.findById(req.params.id);

    if (col) {
        col.name = name;
        col.color = color;

        const updateColor = await col.save();
        res.json(updateColor);
    } else {
        res.status(404);
        throw new Error("Color not found");
    }
});

export {
    getColors,
    getColorById,
    deleteColor,
    createColor,
    updateColor
}