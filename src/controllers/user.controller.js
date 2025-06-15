import userService from '../services/user.service.js';
import { validationResult } from 'express-validator';

const getCurrentUser = async (req, res, next) => {
    try {
        const user = await userService.getUserByID(req.user.id);
        res.status(200).json({ data: user });
    } catch (error) {
        next(error);
    }
};

const updateUserProfile = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const updatedUser = await userService.updateUser(req.user.id, req.body);
        res.status(200).json({ message: 'Profile updated successfully', data: updatedUser });
    } catch (error) {
        if (error.message === 'User not found') {
            return res.status(404).json({ message: error.message });
        }
        next(error);
    }
};

const getAllUsers = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;

    try {
        const users = await userService.getAllUsers(limit, offset);
        res.status(200).json({ data: users });
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await userService.getUserById(req.params.id);
        res.status(200).json({ data: user });
    } catch (error) {
        if (error.message === 'User not found') {
            return res.status(404).json({ message: error.message });
        }
        next(error);
    }
};

const deleteUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const result = await userService.deleteUser(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        if (error.message === 'User not found') {
            return res.status(404).json({ message: error.message });
        }
        next(error);
    }
};

export default {
    getCurrentUser,
    updateUserProfile,
    getAllUsers,
    getUserById,
    deleteUser,
};
