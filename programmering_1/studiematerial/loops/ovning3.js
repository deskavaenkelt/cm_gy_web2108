let students = [
    ['David', 80],
    ['Vinoth', 77],
    ['Divya', 88],
    ['Ishitha', 95],
    ['Thomas', 68]
];

let averageMarks = 0;

for (let i = 0; i < students.length; i++) {
    averageMarks += students[i][1];
}

let averageGrade = (averageMarks / students.length);

console.log("Average grade: " + averageGrade);

if (averageGrade < 60) {
    console.log("Grade : F");
} else if (averageGrade < 70) {
    console.log("Grade : D");
} else if (averageGrade < 80) {
    console.log("Grade : C");
} else if (averageGrade < 90) {
    console.log("Grade : B");
} else if (averageGrade < 100) {
    console.log("Grade : A");
}
