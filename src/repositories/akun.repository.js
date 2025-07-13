import db from '../models/index.js';

// Models
const { Akun } = db;

export default class AkunRepository {
    static async getAll(where = {}) {
        try {
            const config = {
                where: {
                    status_delete: 0,
                    ...where,
                },
            };

            const akun = await Akun.findAll(config);
            return akun.map((akun) => akun.toJSON());
        } catch (error) {
            throw new Error(`Error repository getAll: ${error.message}`);
        }
    }

    static async getOne(where = {}) {
        try {
            const config = {
                where: {
                    status_delete: 0,
                    ...where,
                },
            };

            const akun = await Akun.findOne(config);
            return akun?.toJSON() || null;
        } catch (error) {
            throw new Error(`Error repository get: ${error.message}`);
        }
    }

    static async create(transaction, data) {
        try {
            const akun = await Akun.create(data, {
                transaction,
            });
            return akun.toJSON();
        } catch (error) {
            throw new Error(`Error repository create: ${error.message}`);
        }
    }

    static async update(transaction, id, data) {
        try {
            const [count] = await Akun.update(data, {
                where: {
                    id_akun: id,
                },
                transaction,
            });
            return count;
        } catch (error) {
            throw new Error(`Error repository update: ${error.message}`);
        }
    }
}
