// Utility functions for various operations

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

const deepClone = obj => Array.isArray(obj) ? obj.map(deepClone) : typeof obj === 'object' && obj !== null ? Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, deepClone(value)])) : obj;

export { getRandomInt, capitalizeFirstLetter, shuffleArray, debounce, deepClone };