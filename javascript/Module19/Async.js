function getdata(){
    try {
    const res = fetch("https://jsonplaceholder.typicode.com/posts/")
    const data  = await res.json;
    console.log(data);
}catch (err){
    console.log("Error caught");
}
}

getdata ();