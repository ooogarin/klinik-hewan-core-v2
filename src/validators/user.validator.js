import { body, param, query } from 'express-validator';

// Helper function for UUID validation (Sequelize default for ID)
export const isUUID = (value) => {
    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    if (!uuidRegex.test(value)) {
        throw new Error('Invalid UUID format');
    }
    return true;
};

const userID = [param('id').custom(isUUID).withMessage('Invalid user ID format')];
const createUser = [
    body('username').exists().isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    body('email').exists().isEmail().withMessage('Invalid email format'),
    body('password').exists().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('role').exists().isIn(['user', 'admin', 'vet', 'receptionist']).withMessage('Invalid role provided'), // Menambahkan peran baru
];

export default {
    userID,
    createUser,
};
