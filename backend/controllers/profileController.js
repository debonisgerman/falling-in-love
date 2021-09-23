import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc Fetch all users
// @route GET /api/users
// @access Public
const getProfiles = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
});

// @desc Fetch single user
// @route GET /api/users/:id
// @access Public
const getProfileById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        res.json(user);
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});

// @desc Delete user
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        await user.remove();
        res.json({ message: "User removed" });
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});

// @desc Create User
// @route POST /api/users
// @access Private/Admin
const createProfile = asyncHandler(async (req, res) => {
    const user = new User({
        name: 'user',
        email: 'email@email.com',
        isAdmin: false,
        password: 'password',
    });

    const createdUser = await user.save();
    res.status(201).json(createdUser);
});

// @desc Update user
// @route PUT /api/users/:id
// @access Private/Admin
const updateProfile = asyncHandler(async (req, res) => {
    const {
        name,
        email,
        isAdmin,
        password,
        updatePassword
    } = req.body;

    const user = await User.findById(req.params.id);

    if (user) {
        user.name = name;
        user.email = email;
        user.isAdmin = isAdmin;
        if (updatePassword) {
            user.password = password;
        }

        const updateUser = await user.save();
        res.json(updateUser);
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});

export {
    getProfiles,
    getProfileById,
    deleteProfile,
    createProfile,
    updateProfile
}