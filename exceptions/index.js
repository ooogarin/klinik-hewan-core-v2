import { CustomError } from './customError.exception.js';
import { ErrorNotFound } from './errorNotFound.exception.js';

const errorHandler = (err, req, res, next) => {
    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        response: [],
        metadata: {
            code: statusCode,
            level: err.level,
            message,
        },
    });
};

export { errorHandler, CustomError, ErrorNotFound };
