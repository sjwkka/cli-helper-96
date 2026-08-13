// Utility function to click at a specified interval
function autoClicker(clickInterval) {
    if (typeof clickInterval !== 'number' || clickInterval <= 0) {
        console.error('Invalid click interval; must be a positive number.');
        return;
    }
    try {
        const click = () => {
            // Simulating a mouse click
            console.log('Mouse clicked!');
        };
        const intervalId = setInterval(click, clickInterval);
        return intervalId;
    } catch (error) {
        console.error('Error in autoClicker:', error.message);
    }
}

// Example usage
const interval = 1000; // 1 second
const clickId = autoClicker(interval);

// Function to stop the auto-clicking
function stopAutoClicker(intervalId) {
    if (intervalId) {
        clearInterval(intervalId);
        console.log('Auto-clicking stopped.');
    } else {
        console.error('No valid interval ID provided to stop.');
    }
}

// Stop clicking after 10 seconds
setTimeout(() => stopAutoClicker(clickId), 10000);