const button = document.getElementById("btn")


button.addEventListener("mouseup",
    () =>    button.style.backgroundColor ='red'
);

   button.addEventListener("Mouse", () =>{
   button.style.backgroundColor = "green";
   button.textContent  = "Button has been relesed";

});