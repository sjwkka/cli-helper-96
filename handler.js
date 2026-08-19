class ClickHandler {
    constructor(clickInterval) {
        this.clickInterval = clickInterval;
        this.intervalId = null;
    }

    startAutoClick() {
        this.intervalId = setInterval(() => {
            this.handleClick();
        }, this.clickInterval);
    }

    handleClick() {
        // Simulating a click with console log
        console.log('Clicked at: ' + new Date().toLocaleTimeString());
    }

    stopAutoClick() {
        clearInterval(this.intervalId);
        this.intervalId = null;
        console.log('Auto clicking stopped.');
    }

    setClickInterval(newInterval) {
        this.stopAutoClick();
        this.clickInterval = newInterval;
        this.startAutoClick();
    }
}

module.exports = ClickHandler;