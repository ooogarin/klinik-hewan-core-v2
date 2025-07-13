import AkunService from '../services/akun.service.js';

export default class AkunController {
    // Get all akun
    static async getAll(req, res, next) {
        try {
            const akunList = await AkunService.getAll(req);
            res.status(200).json({
                response: akunList,
                metadata: {
                    code: 200,
                    message: 'Success',
                },
            });
        } catch (error) {
            next(error);
        }
    }

    // Get akun by id
    static async getByID(req, res, next) {
        try {
            const akun = await AkunService.getByID(req);

            res.status(200).json({
                response: akun,
                metadata: {
                    code: 200,
                    message: 'Success',
                },
            });
        } catch (error) {
            next(error);
        }
    }

    // Create new akun
    static async create(req, res, next) {
        try {
            const akun = await AkunService.create(req);
            res.status(201).json({
                response: akun,
                metadata: {
                    code: 201,
                    message: 'Akun berhasil dibuat',
                },
            });
        } catch (error) {
            next(error);
        }
    }

    // Update akun
    static async update(req, res, next) {
        try {
            const akun = await AkunService.update(req);
            res.status(201).json({
                response: akun,
                metadata: {
                    code: 201,
                    message: 'Akun berhasil diubah',
                },
            });
        } catch (error) {
            next(error);
        }
    }

    // Soft delete akun
    static async softDelete(req, res, next) {
        try {
            const akun = await AkunService.softDelete(req);
            res.status(201).json({
                response: akun,
                metadata: {
                    code: 201,
                    message: 'Akun berhasil diubah',
                },
            });
        } catch (error) {
            next(error);
        }
    }
}
