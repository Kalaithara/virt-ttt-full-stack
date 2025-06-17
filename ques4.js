var people = [
    { name: "Ravi", birthdate: "1990-06-16" },
    { name: "Meena", birthdate: "1985-12-25" }
];
var today = new Date();
var results = people
    .filter(function (p) {
    var dob = new Date(p.birthdate);
    return dob.getDate() === today.getDate() && dob.getMonth() === today.getMonth();
})
    .map(function (p) { return "Today is ".concat(p.name, "'s birthday!"); });
console.log(results.length ? results.join("\n") : "No birthdays today.");
