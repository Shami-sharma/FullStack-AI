setTimeout(()=>{
    console.log('setTimeout-1');
},100);

setTimeout(()=>{
    console.log("setTime-2");
},100);

Promise.resolve().then(() =>{
    console.log("promise")
});

console.log("Hey from call stack ");