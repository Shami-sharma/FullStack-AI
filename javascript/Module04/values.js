let obj2 = {
 first_name: "Shami",
 last_name: "Sharma",
    age: 20,
    Gender: "Male",
    occupation: "Student",
    "fulltime employee": true,
    "part time employee": false,
    city: "bhilai chhattisgarh",
};
console.log(Object.keys(obj2));
 // Output: [ 'first_name', 'last_name', 'age', ' Gender',
 //  'occupation', 'fulltime employee', 'part time employee', 'city' ]

console.log(Object.values(obj2));

 // Output: [ 'Shami', 'Sharma', 20, 'Male', 'Student', true,
 //  false, 'bhilai chhattisgarh' ]   