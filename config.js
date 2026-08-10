const fs = require('fs');
const path = require('path');

class ConfigLoader {
    constructor(defaults) {
        this.defaults = defaults;
    }

    loadConfig(filePath) {
        const absolutePath = path.resolve(filePath);
        let config = {};

        try {
            const rawConfig = fs.readFileSync(absolutePath, 'utf-8');
            config = JSON.parse(rawConfig);
        } catch (error) {
            console.warn(`Could not load config: ${error.message}. Using defaults instead.`);
        }

        return { ...this.defaults, ...config };
    }
}

module.exports = ConfigLoader;