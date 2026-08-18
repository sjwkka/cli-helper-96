const defaultConfig = { delay: 100, duration: 5000, mouseButton: 'left', repeat: 10 };  

function loadConfig(customConfig) {  
    return { ...defaultConfig, ...customConfig };  
}  

module.exports = { loadConfig };