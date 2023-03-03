const pine = require('pine');

const apiLogger = pine();


class APILogger {

    info(message) {
        apiLogger.info(message);
    }

    info(message, data) {
        apiLogger.info(`${message}   ${undefined != data ? JSON.stringify(data) : ''}`);
    }

    error(message) {
        apiLogger.error(message);
    }
}

module.exports = new APILogger();