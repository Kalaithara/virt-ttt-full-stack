const students = [
  { name: "Asha", grades: [90, 80, 85] },
  { name: "Kiran" },
  { name: "Lila", grades: [70, 75] }
];

const messages = students.map(student => {
  const grades = student.grades;
  if (grades?.length > 0) {
    const avg = grades.reduce((a, b) => a + b) / grades.length;
    return `Student ${student.name} has an average grade of ${avg}`;
  } else {
    return `Student ${student.name} has no grades.`;
  }
});

console.log(messages);