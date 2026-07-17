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

let last_failed_student = marks.findLast((elem) =>{
    if(elem.marks<30){
        return true;
    }
    return false;
})

console.log(last_failed_student.first_name);