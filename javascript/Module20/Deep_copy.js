const obj1 = {
    name: "Ritik",
    age : 35,
};

// const obj2 = {...obj1};

// console.log(obj1,obj2);

// json parse + json stringify

// JSON.parse(JSON.stringify(obj1))

// console.log(obj2);

// console.log(JSON .stringify(obj2),obj1);

// console.log(JSON.parse(obj2));

const obj2 = JSON.parse(JSON.stringify(obj1));

obj1.age = 100;

console.log(obj1,obj2);



