let obj = {
    name: "Shami Sharma",
    age: 20,
    occupation: "Student",
    gender: "Male",
    city: "bhilai chhattisgarh", 
};

delete obj.city; // deleting the property from the object
let obj1 = {
    name: "Shami Sharma",
    name: "Ashana Sharma",
    name: "Naman Sharma",
};

console.log(obj1); // Output: { name: 'Naman Sharma' }  // last value will be taken as the value of the property

// updating the value of the property in the object
obj.age = 21;
obj.city = "Mumbai";

delete obj.city; // deleting the property

console.log(obj); // Output: { name: 'Shami Sharma', age: 21, occupation: 'Student