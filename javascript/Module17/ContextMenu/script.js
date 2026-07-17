const target_div = document.getElementById("my_div");

target_div.addEventListener('contextmenu',(e) =>{
    e.preventDefault()
    console.log(e);

    const menu = document.getElementById('custom_menu');
    menu.style.tab = '${e.pagey}px';
    menu.style.left= '${e.pagey}px';
    menu.style.display= "block";
});