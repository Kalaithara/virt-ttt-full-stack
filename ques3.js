var students = [
    { name: "Kalai", grades: [90, 80, 85] },
    { name: "Thara" },
    { name: "Navee", grades: [70, 75] }
];
var messages = students.map(function (student) {
    var grades = student.grades;
    if ((grades === null || grades === void 0 ? void 0 : grades.length) > 0) {
        var avg = grades.reduce(function (a, b) { return a + b; }) / grades.length;
        return "Student ".concat(student.name, " has an average grade of ").concat(avg);
    }
    else {
        return "Student ".concat(student.name, " has no grades.");
    }
});
console.log(messages);
