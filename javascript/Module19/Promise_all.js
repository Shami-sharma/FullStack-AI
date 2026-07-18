let p1 = promise.resolve('P1 has been resolved')
let p2 = promise.resolve('P2 has been resolved');
let p3 = promise.resolve('P3 has been resolved');
let p4 = promise.resolve('P4 has been resolved');

promise.all([p1,p2,p3,p4]).then((res) =>{
    console.log('Results:' , res);
}).catch((error) =>{
    console.log('Faild' ,errpr);
})
