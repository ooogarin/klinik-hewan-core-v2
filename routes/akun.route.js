import express from 'express';
import controller from '../src/controllers/akun.controller.js';

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id_akun', controller.getByID);
router.post('/', controller.create);
router.patch('/:id_akun', controller.update);
router.delete('/:id_akun', controller.softDelete);

export default router;
