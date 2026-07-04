// Approach 1
// Most commmon approach to create an array is using array literal syntax. It is the most common and recommended way to create an array in JavaScript.
const fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits); // Output: ['Apple', 'Banana', 'Mango']    

// Approach 2
// rarely used 
let arr1 = new Array('Apple', 'Banana', 'Mango');

console.log(arr1); // Output: ['Apple', 'Banana', 'Mango']

let arr2 = [1,2,3,4 ];

let arr3 = ['John',2,false,true,arr2 ]; // creates an array of length 5 with empty slots

console.log(arr2); // Output: [1, 2, 3, 4]
console.log(arr3); // Output: ['John', 2, false, true, [1, 2, 3, 4]]