const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, 'config.json');

let config = {};

try {
    const rawData = fs.readFileSync(configPath);
    config = JSON.parse(rawData);
} catch (error) {
    if (error.code === 'ENOENT') {
        console.error('Error: Config file not found.');
    } else if (error.name === 'SyntaxError') {
        console.error('Error: Config file contains invalid JSON.');
    } else {
        console.error('Error: An unexpected error occurred while loading config.', error);
    }
    process.exit(1);
}

const validateConfig = () => {
    if (!config.clickInterval) {
        console.error('Error: Missing clickInterval in config.');
        process.exit(1);
    }
    if (typeof config.clickInterval !== 'number' || config.clickInterval <= 0) {
        console.error('Error: clickInterval must be a positive number.');
        process.exit(1);
    }
};

validateConfig();

module.exports = config;