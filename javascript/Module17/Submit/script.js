let form = document.getElementById('formid')

form.addEventListener('sumit',function(e){
    e.preventDefault();
    console.log('the form has been submitted successfully ✅')
})