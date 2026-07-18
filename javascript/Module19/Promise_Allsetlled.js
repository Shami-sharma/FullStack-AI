const p1 = promise.resolve("Resolve coming from  p1");
const p1 = promise.resolve("Resolve coming from  p2");

const p3  = new promise((resolve) => {
    setTimeout(() => {
        resolve("Resolution comming from p3");
    },1000);
});

// commsuming a  promise 
promise.allSettled([p1,p2,p3]).then ((result) =>{
    console.log(results);
}) 