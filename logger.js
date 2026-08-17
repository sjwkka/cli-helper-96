const fs = require('fs');
const path = require('path');

class Logger {
    constructor(logDir, maxFiles) {
        this.logDir = logDir;
        this.maxFiles = maxFiles;
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }
        this.logFile = path.join(logDir, `log-${new Date().toISOString().slice(0, 10)}.txt`);
    }

    log(message) {
        const timestamp = new Date().toISOString();
        fs.appendFileSync(this.logFile, `${timestamp} - ${message}\n`);
        this.rotateLogs();
    }

    rotateLogs() {
        const logFiles = fs.readdirSync(this.logDir).filter(file => file.startsWith('log-'));
        if (logFiles.length > this.maxFiles) {
            const oldestFile = logFiles.sort().shift();
            fs.unlinkSync(path.join(this.logDir, oldestFile));
        }
    }
}

module.exports = Logger;