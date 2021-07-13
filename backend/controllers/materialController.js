import asyncHandler from "express-async-handler";
import Material from "../models/materialModel.js";

// @desc Fetch all materials
// @route GET /api/materials
// @access Public
const getMaterials = asyncHandler(async (req, res) => {
    const materials = await Material.find({});
    res.json(materials);
});

// @desc Fetch single material
// @route GET /api/materials/:id
// @access Public
const getMaterialById = asyncHandler(async (req, res) => {
    const material = await Material.findById(req.params.id);

    if (material) {
        res.json(material);
    } else {
        res.status(404);
        throw new Error("Material not found");
    }
});

// @desc Delete material
// @route DELETE /api/materials/:id
// @access Private/Admin
const deleteMaterial = asyncHandler(async (req, res) => {
    const material = await Material.findById(req.params.id);

    if (material) {
        await material.remove();
        res.json({ message: "Material removed" });
    } else {
        res.status(404);
        throw new Error("Material not found");
    }
});

// @desc Create Material
// @route POST /api/materials
// @access Private/Admin
const createMaterial = asyncHandler(async (req, res) => {
    const material = new Material({
        name: 'material',
    });

    const createdMaterial = await material.save();
    res.status(201).json(createdMaterial);
});

// @desc Update material
// @route PUT /api/materials/:id
// @access Private/Admin
const updateMaterial = asyncHandler(async (req, res) => {
    const {
        name,
    } = req.body;

    const material = await Material.findById(req.params.id);

    if (material) {
        material.name = name;

        const updateMaterial = await material.save();
        res.json(updateMaterial);
    } else {
        res.status(404);
        throw new Error("Material not found");
    }
});

export {
    getMaterials,
    getMaterialById,
    deleteMaterial,
    createMaterial,
    updateMaterial
}