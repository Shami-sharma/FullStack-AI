const user = {
    name: "Shammi",
    age: 25,
    city: "New York"
};

for (let key in user) {
    console.log(key + ": " + user[key]);
}

const arr = ["Shami", 25, "New York"];
for (let index in arr) {
    console.log(index + ": " + arr[index]);
}