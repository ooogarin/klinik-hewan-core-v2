export class ErrorNotFound extends Error {
    constructor(message) {
        super(message);
        this.status = 404;
        this.message = message || 'Data tidak ditemukan!';
        Error.captureStackTrace(this, this.constructor);
    }
}
