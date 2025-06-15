export class CustomError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.name = this.constructor.name;
        this.level = 'test';
        Error.captureStackTrace(this, this.constructor);
    }
}
