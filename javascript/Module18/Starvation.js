console.log('Hey');
function promise(){
    promise.resolve().then(promise);
}
promise();

setTimeout(() => {
    console.log("Coming from settimeout");
},100); // Macrotaskqueue