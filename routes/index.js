import express from 'express';
import userRouter from './user.route.js';
import akunRouter from './akun.route.js';

const router = express.Router();

router.use('/users', userRouter);
router.use('/akun', akunRouter);

export default router;
