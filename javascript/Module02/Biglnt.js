let  n1 = Number.MAX_SAFE_INTEGER

let n2 = Number.MIN_SAFE_INTEGER

console.log(n1+1=== n2+1); // precision loss
console.log(n1);
     

let n3= 9007199254740993n;
 
console.log(n3+2n=== n3+3n); // no  precision loss
