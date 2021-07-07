import asyncHandler from "express-async-handler";
import Category from "../models/categoryModel.js";

// @desc Fetch all categories
// @route GET /api/categories
// @access Public
const getCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find({});
    res.json(categories);
});

// @desc Fetch single category
// @route GET /api/categories/:id
// @access Public
const getCategoryById = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);

    if (category) {
        res.json(category);
    } else {
        res.status(404);
        throw new Error("Category not found");
    }
});

// @desc Delete category
// @route DELETE /api/categories/:id
// @access Private/Admin
const deleteCategory = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);

    if (category) {
        await category.remove();
        res.json({ message: "Category removed" });
    } else {
        res.status(404);
        throw new Error("Category not found");
    }
});

// @desc Create Category
// @route POST /api/categories
// @access Private/Admin
const createCategory = asyncHandler(async (req, res) => {
    const category = new Category({
        name: 'categoría',
        description: 'descripción',
        image: "/images/logo.jpg",
        showInHome: false,
    });

    const createdCategory = await category.save();
    res.status(201).json(createdCategory);
});

// @desc Update category
// @route PUT /api/categories/:id
// @access Private/Admin
const updateCategory = asyncHandler(async (req, res) => {
    const {
        name,
        showInHome,
        description,
        image,
    } = req.body;

    const category = await Category.findById(req.params.id);

    if (category) {
        category.name = name;
        category.showInHome = showInHome;
        category.description = description;
        category.image = image;

        const updateCategory = await category.save();
        res.json(updateCategory);
    } else {
        res.status(404);
        throw new Error("Category not found");
    }
});

export {
    getCategories,
    getCategoryById,
    deleteCategory,
    createCategory,
    updateCategory
}