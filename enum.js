// Add Enums only Numbers type...
//By default position of str == 0
var student;
(function (student) {
    student[student["num"] = 0] = "num";
    student[student["num1"] = 1] = "num1"; // position of str == 1
})(student || (student = {}));
;
console.log(student.num);
console.log(student.num1);
var school;
(function (school) {
    school[school["number"] = 1] = "number";
    school[school["number1"] = 2] = "number1";
})(school || (school = {}));
console.log(school.number);
console.log(school.number1);
// Enums Add only String Type...
var allStr;
(function (allStr) {
    allStr["str"] = "Hello";
    allStr["str1"] = "World!";
})(allStr || (allStr = {}));
console.log(allStr.str);
console.log(allStr.str1);
