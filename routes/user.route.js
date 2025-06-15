import express from 'express';
import route from '../src/controllers/user.controller.js';
import validate from '../src/validators/user.validator.js';

const router = express.Router();

router.get('/', route.getAllUsers);
router.get('/:id', route.getUserByID);
router.post('/', validate.createUser, route.createUser);
router.patch('/:id', route.updateUser);
router.delete('/:id', route.deleteUser);

export default router;
