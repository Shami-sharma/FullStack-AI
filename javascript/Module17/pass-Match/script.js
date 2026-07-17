let signup_form = document.getElementById("signup");
let pass = document.getElementById("pass");
let confirm_pass = document.getElementById("confirm_pass");
let msg = document.getElementById("message");

signup_form.addEventListener('submit',function(e){
    e.preventDefault();
    if(pass.value != con_pass.value){
        msg.innerText = "passwords do not match ❌";
        msg.style.color = "red"
    }else{
        msg.innerText = "password Matched !!✅";
        msg.style.color = "green";
    }
});
l