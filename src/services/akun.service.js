import { errorHandler, ErrorNotFound, CustomError } from '../../exceptions/index.js';

import AkunRepository from '../repositories/akun.repository.js';
import db from '../../databases/mysql.connection.js';

export default class AkunService {
    // Get all akun with optional filters
    static async getAll(req) {
        try {
            return await AkunRepository.getAll();
        } catch (error) {
            throw new Error(`Gagal mengambil daftar akun: ${error.message}`);
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
            const akun = await AkunRepository.create(transaction, {
                payload,
                status_delete: 0,
            });
            await transaction.commit();
            return akun;
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw new Error(`Gagal membuat akun: ${error.message}`);
        }
    }

    // Update akun by id_akun
    static async update(req) {
        try {
            const transaction = await db.sequelize.transaction();

            const idAkun = req.params.id_akun;

            const akun = await AkunRepository.update(transaction, idAkun, req.body);
            if (!akun) {
                await transaction.rollback();
                throw new Error('Akun tidak ditemukan atau sudah dihapus');
            }
            await transaction.commit();
            return akun;
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw new Error(`Gagal memperbarui akun: ${error.message}`);
        }
    }

    // Soft delete akun by id_akun
    static async softDelete(req) {
        try {
            const transaction = await db.sequelize.transaction();

            const idAkun = req.params.id_akun;

            const result = await AkunRepository.update(transaction, idAkun);
            await transaction.commit();
            return result;
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw new Error(`Gagal menghapus akun: ${error.message}`);
        }
    }
}
