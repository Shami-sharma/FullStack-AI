Promise.resolve().then(() =>{
    console.log("Promise 1 has been resolved")
});
Promise.resolve().then(()=>{
    console.log('promise 2 has been resolved');
})

console.log('Hey');