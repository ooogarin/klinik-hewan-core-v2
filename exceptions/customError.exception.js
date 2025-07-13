export class CustomError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message || 'Undefined error';
        Error.captureStackTrace(this, this.constructor);
    }
}
