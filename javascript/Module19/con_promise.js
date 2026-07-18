let success = true;
// Making promise 
 let promise = new promise(function (resolve,reject){
    if(success){
        resolve("Promise Fulfilled");
    }else {
        reject("Promise Unsucessful");
    }
 });

 // 

 promise.then((msg)=>{
    console.log(msg);
 }).catch((err)=>{
    console.log(err);
 });