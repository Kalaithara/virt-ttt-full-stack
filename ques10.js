var csvLines = [
    [["  Alice  ", "Math", ["Science", "Art"]]],
    [["Bob", "History", "Math"]],
    [[" Charlie ", ["Biology", "Chemistry"]]],
    [["Dana", ["Math"], "English"]],
];
function parseStudents(data) {
    var studentMap = [];
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var line = data_1[_i];
        try {
            var _a = line[0], rawName = _a[0], coursesRaw = _a.slice(1);
            var name_1 = rawName.trim();
            var courses = coursesRaw.flatMap(function (course) {
                return Array.isArray(course) ? course : [course];
            }).map(String); // Ensure all are strings
            studentMap.push([name_1, courses]);
        }
        catch (_b) {
            console.log("Error parsing line:", line);
        }
    }
    return Object.fromEntries(studentMap);
}
var groupedStudents = parseStudents(csvLines);
console.log("Grouped Student Courses:", groupedStudents);
