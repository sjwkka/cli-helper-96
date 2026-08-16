class Logger {
    constructor(logLevel) {
        this.logLevel = logLevel;
        this.logLevels = { DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3 };
    }

    log(message, level) {
        if (this.logLevels[level] >= this.logLevels[this.logLevel]) {
            console.log(`[${level}] ${new Date().toISOString()}: ${message}`);
        }
    }

    debug(message) {
        this.log(message, 'DEBUG');
    }

    info(message) {
        this.log(message, 'INFO');
    }

    warn(message) {
        this.log(message, 'WARN');
    }

    error(message) {
        this.log(message, 'ERROR');
    }
}

const logger = new Logger('DEBUG');

logger.info('Logger initialized');

module.exports = logger;