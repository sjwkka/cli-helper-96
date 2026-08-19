function retryOperation(operation, retries, delay) {
    return new Promise((resolve, reject) => {
        const attempt = (remainingAttempts) => {
            operation()
                .then(resolve)
                .catch((error) => {
                    if (remainingAttempts === 0) {
                        reject(error);
                    } else {
                        setTimeout(() => {
                            attempt(remainingAttempts - 1);
                        }, delay);
                    }
                });
        };
        attempt(retries);
    });
}

// Example network operation
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

// Usage of retryOperation
retryOperation(fetchData, 5, 1000)
    .then(data => console.log('Data fetched:', data))
    .catch(error => console.error('Fetch failed:', error));
