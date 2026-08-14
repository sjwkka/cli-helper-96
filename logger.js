class Logger {
    constructor() {
        this.logs = [];
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push(`[${timestamp}] ${message}`);
        if (this.logs.length > 100) this.logs.shift();
    }

    getLogs() {
        return this.logs;
    }

    clearLogs() {
        this.logs = [];
    }
}

const logger = new Logger();

function logError(error) {
    logger.log(`ERROR: ${error}`);
}

function logInfo(info) {
    logger.log(`INFO: ${info}`);
}

module.exports = { logger, logError, logInfo };