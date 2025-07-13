import express from 'express';
import akunRouter from './akun.route.js';

const router = express.Router();

router.use('/akun', akunRouter);

export default router;
