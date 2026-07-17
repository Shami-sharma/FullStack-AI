let marks = [

    {
        first_name:"shami",
        marks: 70,
    },
    {
        first_name : "Ram",
        marks : 80,
    },
    {
        first_name : "Nand",
        marks : 31,

    },
    {
    first_name : "Rahul",
    marks : 75,
    },
    
    {
    first_name : "Ankit",
    marks : 30,
    }
];

// i want list of all the name of the student (first_name ) who are failing (marks<30)


let failing_student = marks.filter((elem , ind) =>{
    if(elem.marks<30) {
        return true;
    } else return false;
    });
    
    for(let i =0;i<failing_student.length;i++){
    console.log(failing_student);
    }