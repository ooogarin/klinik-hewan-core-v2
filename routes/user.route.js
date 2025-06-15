import express from 'express';
import route from '../src/controllers/user.controller.js';

const router = express.Router();

router.get('/me', route.getCurrentUser);
router.patch('/me', route.updateUserProfile);
router.get('/', route.getAllUsers);
router.get('/:id', route.getUserById);
router.delete('/:id', route.deleteUser);

export default router;
