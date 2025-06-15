import userService from '../services/user.service.js';
import { validationResult } from 'express-validator';

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

const getUserByID = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await userService.getUserByID(req.params.id);
        res.status(200).json({ data: user });
    } catch (error) {
        next(error);
    }
};

const createUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newUser = await userService.createUser(req.body);
        res.status(201).json({ message: 'User created successfully', data: newUser });
    } catch (error) {
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        res.status(200).json({ message: 'User updated successfully', data: updatedUser });
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
    getAllUsers,
    getUserByID,
    createUser,
    updateUser,
    deleteUser,
};
