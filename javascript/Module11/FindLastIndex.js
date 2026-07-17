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


// we want to find last failing student 

let last_failed_student_index = marks.findLastIndex((elem)=>{
    if(elem.marks<30){
        return true;
    }
    else return false;
})
console.log(last_failed_student_index);