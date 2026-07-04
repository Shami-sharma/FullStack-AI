let arr = [1,2,3,4,5];

let user = {
    First_name: "Shami",
    Last_name: "Sharma",
    Age: 20,
    Occupation: "Student",
    Gender: "Male",
    arr: arr
};

console.log(user); // Output: Shami

let userName = "NAME";

let obj1 = {
    [userName]: "Shami Sharma",
};

console.log(obj1); // Output: { NAME: 'Shami Sharma' }


let  obj3 = new Object();

obj3.name = "Shami Sharma";
obj3.age = 20;
obj3.occupation = "Student";
obj3.gender = "Male";

console.log(obj3); // Output: { name: 'Shami Sharma', age: 20 }


