const EventEmitter = require('events');

class ClickHandler extends EventEmitter {
    constructor() {
        super();
        this.interval = null;
        this.isActive = false;
    }

    startClicking(interval) {
        if (this.isActive) return;
        this.isActive = true;
        this.interval = setInterval(() => this.emit('click'), interval);
    }

    stopClicking() {
        if (!this.isActive) return;
        clearInterval(this.interval);
        this.isActive = false;
    }

    toggleClicking(interval) {
        this.isActive ? this.stopClicking() : this.startClicking(interval);
    }
}

module.exports = ClickHandler;

// Usage example:
// const ClickHandler = require('./handler');
// const clicker = new ClickHandler();
// clicker.on('click', () => console.log('Click!'));