function data(){
    return new promise((resolve) => {
        setTimeout(()=> {
            resolve({user: "Shami", age:20});
        },1000);
    });
}

date().then((res)=>{
    console.log(res);
})
