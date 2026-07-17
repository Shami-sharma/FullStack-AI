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

// we want to get the index of the first failing student .

let first_failed_student_index = marks.findindex((elem) =>{
    if(elem.marks < 33){
        return true;
    }
    return false;
})

console.log(first_failed_student_index);




