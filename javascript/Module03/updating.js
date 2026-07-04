













let arr = [1,2,3,4,5,"A", "B", "C", "D", "E"];
// ACCESSING ARRAY ELEMENTS

// CONSOLE.LOG(arr[3]); METHOD

arr[3] = 100; // updating the value of the 4th element in the array
console.log(arr); // Output: 100

delete arr[3]; // deleting the 4th element in the array
console.log(arr); // Output: [1, 2, 3, <1 empty item>, 5, 'A', 'B', 'C', 'D', 'E']  

// deleting  element

let removed_value = arr.pop(); // removes the last element from the array
console.log(removed_value); // Output: 'E'
console.log(arr); // Output: [1, 2, 3, <1 empty item>, 5, 'A', 'B', 'C', 'D']  


