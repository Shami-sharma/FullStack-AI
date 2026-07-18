const p1 = new promise((res) =>{
    setTimeout(() =>{
        res("Run after 1 sec");
    }, 1000);
});

const p2  = new promise((res)=>{
    setTimeout(()=>{
        res("Runs after 2 secs")
    },1000);
});

const p3 = new promise((res)=>{
    setTimeout(()=>{
        res("Runs after 0.5 sec");
    }, 500);
});
promise.race([p1,p2,p3]).then((data)=>{
    console.log(data);
})