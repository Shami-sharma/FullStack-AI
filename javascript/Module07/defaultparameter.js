function hello(first_name , lastname = "Sharma") {
    console.log("Hello " + firstname + " " + lastname);
}

// 1
hello("Shami", "Sharma");

// 2
hello('Sumit'); // here we are not passing the second parameter so it will take the default value of lastname which is "Sharma"