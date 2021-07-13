import asyncHandler from "express-async-handler";
import Section from "../models/sectionModel.js";

// @desc Fetch all sections
// @route GET /api/sections
// @access Public
const getSections = asyncHandler(async (req, res) => {
    const sections = await Section.find({});
    res.json(sections);
});

// @desc Fetch single section
// @route GET /api/sections/:id
// @access Public
const getSectionById = asyncHandler(async (req, res) => {
    const section = await Section.findById(req.params.id);

    if (section) {
        res.json(section);
    } else {
        res.status(404);
        throw new Error("Section not found");
    }
});

// @desc Delete section
// @route DELETE /api/sections/:id
// @access Private/Admin
const deleteSection = asyncHandler(async (req, res) => {
    const section = await Section.findById(req.params.id);

    if (section) {
        await section.remove();
        res.json({ message: "Section removed" });
    } else {
        res.status(404);
        throw new Error("Section not found");
    }
});

// @desc Create Section
// @route POST /api/sections
// @access Private/Admin
const createSection = asyncHandler(async (req, res) => {
    const section = new Section({
        name: 'sección',
    });

    const createdSection = await section.save();
    res.status(201).json(createdSection);
});

// @desc Update section
// @route PUT /api/sections/:id
// @access Private/Admin
const updateSection = asyncHandler(async (req, res) => {
    const {
        name,
    } = req.body;

    const section = await Section.findById(req.params.id);

    if (section) {
        section.name = name;

        const updateSection = await section.save();
        res.json(updateSection);
    } else {
        res.status(404);
        throw new Error("Section not found");
    }
});

export {
    getSections,
    getSectionById,
    deleteSection,
    createSection,
    updateSection
}