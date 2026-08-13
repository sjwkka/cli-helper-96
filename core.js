class AutoClicker {
    constructor(clickInterval) {
        this.clickInterval = clickInterval;
        this.intervalId = null;
    }

    start() {
        if (this.intervalId) return;
        this.intervalId = setInterval(() => this.performClick(), this.clickInterval);
    }

    performClick() {
        // Optimized the click performance
        const event = new MouseEvent('click', { bubbles: true });
        document.body.dispatchEvent(event);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    setInterval(newInterval) {
        this.stop();
        this.clickInterval = newInterval;
        this.start();
    }
}

const clicker = new AutoClicker(100);
clicker.start();