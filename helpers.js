// Utility function to manage autoclicker data
const fs = require('fs');

// Load click configuration from JSON file
function loadClickConfig(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error loading click config:', error);
        return null;
    }
}

// Save updated click configuration to JSON file
function saveClickConfig(filePath, config) {
    try {
        const data = JSON.stringify(config, null, 2);
        fs.writeFileSync(filePath, data);
        console.log('Click config saved successfully.');
    } catch (error) {
        console.error('Error saving click config:', error);
    }
}

// Calculate the next click time based on speed
function calculateNextClickTime(speed) {
    return Date.now() + (1000 / speed);
}

// Utility object to export functions
const ClickConfigUtils = {
    loadClickConfig,
    saveClickConfig,
    calculateNextClickTime
};

module.exports = ClickConfigUtils;
