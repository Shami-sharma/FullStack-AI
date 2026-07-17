let mainbody = document.getElementById("pageBody");
let btn = document.getElementById("toggleBtn");

let isDark = false;
function toggle(){
    if(isDark === false){
        mainbody.style.backgroundColor = "black";
        btn.innerText = "Light Theme";
    }
    else{
        mainbody.style. backgroundColor = "black";
        btn.innerText = "Drak Theme";
    }
    isDark = !isDark;
}