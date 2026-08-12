const fs = require('fs');
const path = require('path');

class Logger {
    constructor(logFile) {
        this.logFile = path.resolve(__dirname, logFile);
        this.stream = fs.createWriteStream(this.logFile, { flags: 'a' });
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.stream.write(`${timestamp} - ${message}\n`);
    }

    error(message) {
        const timestamp = new Date().toISOString();
        this.stream.write(`ERROR - ${timestamp} - ${message}\n`);
    }

    close() {
        this.stream.end();
    }
}

const logger = new Logger('application.log');

module.exports = logger;