// @ts-check
/**
 * Logger utility for logging messages with different severity levels.
 * @module logger
 */

/**
 * Log levels for the logger.
 * @enum {string}
 */
const LogLevel = {
    INFO: 'INFO',
    WARN: 'WARN',
    ERROR: 'ERROR'
};

/**
 * Logs a message at the specified level.
 * 
 * @param {LogLevel} level - The level of the log.
 * @param {string} message - The message to log.
 * @param {Object} [data] - Additional data to include in the log.
 */
function log(level, message, data) {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} [${level}]: ${message}`;
    if (data) {
        console.log(logMessage, data);
    } else {
        console.log(logMessage);
    }
}

module.exports = { LogLevel, log };