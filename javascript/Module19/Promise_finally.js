function asyncTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(success){
                resolve("Task completed successfully");
            }else{
                reject("Task failed");
            }
        },1000);
    });
}
asyncTask().then((res) =>{
    console.log(res)
}).catch ((err) =>{
    console.log(err);
})
.finally(() =>{
    console.log("The promise has sucessfully ran");
});