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


let first_find_student = marks.find((elem) =>{
    if(elem.marks<30){
        return true;
    }
    return false;
})

console.log(first_faile_student.first_name);
