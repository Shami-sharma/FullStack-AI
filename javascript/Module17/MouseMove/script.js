

const mydiv = document.getElementById('my _div');

mydiv.addEventListener("mousemove", () => {
    mydiv.style.backgroundColor = "purple";
    mydiv.style.backgroundColor = "ponter";
    mydiv.style.height = "500px";
    mydiv.style.width = '500px';
    mydiv.style.innerText = "2px solid red";
    mydiv.textContent = "This is after hovering";
});
