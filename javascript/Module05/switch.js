// > 85 = distinction
// > 70 = first class
// > 60 = second class
// > 50 = third class
// > 40 = fourth class
// else = fail

// 




const grade = 'grade 2';

switch (grade) {
    case "distinction":
        console.log("Marks greater than or equal to 85");
        break;
    case "grade 1":
        console.log("Marks greater than  70 or less then 85");
        break;
    case "grade 2":
        console.log("Marks greater than 60 or less then 70");
        break;
    case "grade 3":
        console.log("Marks greater than 50 or less then 60");
        break;
    case "grade 4":
        console.log("Marks greater than 40 or less then 50");
        break;

    default:
        console.log("Student has failed the exam.");
}



