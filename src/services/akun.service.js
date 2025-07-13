import { ErrorNotFound } from '../../exceptions/index.js';

import AkunRepository from '../repositories/akun.repository.js';
import db from '../../databases/mysql.connection.js';

export default class AkunService {
    // Get all akun with optional filters
    static async getAll(req) {
        try {
            return await AkunRepository.getAll();
        } catch (error) {
            throw error;
        }
    }

    // Get akun by id_akun
    static async getByID(req) {
        try {
            const idAkun = req.params.id_akun;

            const akun = await AkunRepository.getOne({ id_akun: idAkun });
            if (!akun) {
                throw new ErrorNotFound('Akun tidak ditemukan');
            }

            return akun;
        } catch (error) {
            throw error;
        }
    }

    // Create new akun
    static async create(req) {
        try {
            const transaction = await db.sequelize.transaction();

            const payload = req.body;
            const akun = await AkunRepository.create(transaction, payload);
            await transaction.commit();
            return akun;
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw error;
        }
    }

    // Update akun by id_akun
    static async update(req) {
        try {
            const transaction = await db.sequelize.transaction();

            const idAkun = req.params.id_akun;

            const payload = req.body;
            const akun = await AkunRepository.update(transaction, idAkun, payload);
            if (!akun) {
                await transaction.rollback();
                throw new Error('Akun tidak ditemukan atau sudah dihapus');
            }
            await transaction.commit();
            return akun;
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw error;
        }
    }

    // Soft delete akun by id_akun
    static async softDelete(req) {
        try {
            const transaction = await db.sequelize.transaction();

            const idAkun = req.params.id_akun;

            const payload = req.body;
            const result = await AkunRepository.update(transaction, idAkun, payload);
            await transaction.commit();
            return result;
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw error;
        }
    }
}
