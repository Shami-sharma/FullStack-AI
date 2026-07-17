let inp = document.getElementsById("keyboard");

inp.addEventListener('keyup',(e) =>{
    // console.log("keyup has beeen pressed", e.key);
    let ans = document.getElementById('ans')
    ans.innerText = e.keyCode;
    let key = document.getElementById("key-text");
    key.innerText = e.key;
    // console.log(e);
});