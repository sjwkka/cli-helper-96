function parseJsonSafely(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Parsing error:', error);
        return null;
    }
}

function mergeDeep(target, source) {
    if (typeof target !== 'object' || target === null) {
        return source;
    }
    if (typeof source !== 'object' || source === null) {
        return target;
    }
    Object.keys(source).forEach((key) => {
        if (typeof source[key] === 'object' && source[key] !== null) {
            target[key] = mergeDeep(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    });
    return target;
}

function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

function formatDate(date, format) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

module.exports = { parseJsonSafely, mergeDeep, isEmptyObject, formatDate };