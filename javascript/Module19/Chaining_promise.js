function fecthData()  {
    return new promise((res)  => {
        setTimeout(()  => {
            res("sept 1: Fetched Deta");
        },1000);
    });

}

function transformData(data){
    return new promise((res) =>{
    setTimeout(() =>{
        res('step 2 :Transformed ${data}');
    }, 1000);
    })
}

function finaldata(){
    return new promise((res) =>{
        setTimeout(() =>{
            res('Step 3: Final ${data}');
        })
    })
}

// consuming a  promise 

fetchData().then ((data) =>{
    console.log(data);
    return transformData(data)
}). then((data) =>{
    console.log(data);
}).catch(() =>{
    console.log(error);
})


