// Callback function example
function processData(data, callback) {
    // Simulate some processing
    setTimeout(() => {
        const result = data * 2;
        callback(result);
    }, 1000);
}

// Usage
processData(5, (result) => {
    console.log("Processed result:", result);
});