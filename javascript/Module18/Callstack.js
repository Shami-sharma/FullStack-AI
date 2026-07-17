function a(){
    b()
    console.log('Hi from fxn a')
}
function b(){
    c()
    console.log('hi from fxn b');
}

function c(c){
    console.log('Hi from fxn c')
}
a();