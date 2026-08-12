class ClickError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ClickError';
    }
}

function simulateClick(element) {
    if (!element) {
        throw new ClickError('Element not found');
    }
    // Simulate click
    // Imagine some click logic here
    console.log(`Click simulated on: ${element}`);
}

function handleClick(element) {
    try {
        simulateClick(element);
    } catch (error) {
        if (error instanceof ClickError) {
            console.error(`ClickError: ${error.message}`);
        } else {
            console.error(`Unexpected error: ${error}`);
        }
    }
}

function clickHandler(elements) {
    if (!Array.isArray(elements) || elements.length === 0) {
        throw new ClickError('No elements provided');
    }
    elements.forEach(handleClick);
}

module.exports = { handleClick, clickHandler };