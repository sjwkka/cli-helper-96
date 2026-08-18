function validateInput(input) {
    if (typeof input !== 'number') {
        throw new Error('Input must be a number');
    }
    if (input < 0) {
        throw new Error('Input must be non-negative');
    }
}

function processInputs(inputs) {
    for (let i = 0; i < inputs.length; i++) {
        try {
            validateInput(inputs[i]);
            console.log('Valid input:', inputs[i]); // process input
        } catch (error) {
            console.error('Error processing input:', error.message);
        }
    }
}

const inputArray = [10, 'a', -5, 20, 15];
processInputs(inputArray);