export class ErrorNotFound extends Error {
    constructor(message) {
        super(message);
        this.status = 404;
        this.name = this.constructor.name;
        this.level = 'warning';
        Error.captureStackTrace(this, this.constructor);
    }
}
