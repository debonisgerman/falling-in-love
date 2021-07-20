import asyncHandler from "express-async-handler";
import Size from "../models/sizeModel.js";
import Product from "../models/productModel.js";

// @desc Fetch all sizes
// @route GET /api/sizes
// @access Public
const getSizes = asyncHandler(async (req, res) => {
    const sizes = await Size.find({});
    res.json(sizes);
});

// @desc Fetch single size
// @route GET /api/sizes/:id
// @access Public
const getSizeById = asyncHandler(async (req, res) => {
    const size = await Size.findById(req.params.id);

    if (size) {
        res.json(size);
    } else {
        res.status(404);
        throw new Error("Size not found");
    }
});

// @desc Delete size
// @route DELETE /api/sizes/:id
// @access Private/Admin
const deleteSize = asyncHandler(async (req, res) => {
    const size = await Size.findById(req.params.id);

    if (size) {

        // search all the products with variants with this size
        let products = await Product.find({ 'variants.sizes.size': req.params.id });
        for (let p in products) {
            for (let v in products[p].variants) {
                products[p].variants[v].sizes = products[p].variants[p].sizes.filter(x => x.size.toString() !== req.params.id.toString());
            }
            await products[p].save();
        }

        await size.remove();
        res.json({ message: "Size removed" });
    } else {
        res.status(404);
        throw new Error("Size not found");
    }
});

// @desc Create Size
// @route POST /api/sizes
// @access Private/Admin
const createSize = asyncHandler(async (req, res) => {
    const size = new Size({
        name: 'talle',
    });

    const createdSize = await size.save();
    res.status(201).json(createdSize);
});

// @desc Update size
// @route PUT /api/sizes/:id
// @access Private/Admin
const updateSize = asyncHandler(async (req, res) => {
    const {
        name,
    } = req.body;

    const size = await Size.findById(req.params.id);

    if (size) {
        size.name = name;

        const updateSize = await size.save();
        res.json(updateSize);
    } else {
        res.status(404);
        throw new Error("Size not found");
    }
});

export {
    getSizes,
    getSizeById,
    deleteSize,
    createSize,
    updateSize
}