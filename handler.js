class ClickHandler {
    constructor() {
        this.isActive = false;
    }

    start() {
        try {
            if (this.isActive) throw new Error('Autoclicker is already running.');
            this.isActive = true;
            this.handleClick();
        } catch (error) {
            this.logError(error);
        }
    }

    stop() {
        try {
            if (!this.isActive) throw new Error('Autoclicker is not running.');
            this.isActive = false;
            console.log('Autoclicker stopped.');
        } catch (error) {
            this.logError(error);
        }
    }

    handleClick() {
        setInterval(() => {
            try {
                if (!this.isActive) return;
                console.log('Click!');
            } catch (error) {
                this.logError(error);
            }
        }, 1000);
    }

    logError(error) {
        console.error('Error:', error.message);
    }
}

const clickHandler = new ClickHandler();
clickHandler.start();

process.on('SIGINT', () => {
    clickHandler.stop();
    process.exit();
});