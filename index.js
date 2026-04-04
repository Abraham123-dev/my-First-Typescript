"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//basic types available in typescript
let age = 30;
let course = "This is Typescript";
let isValid = true;
let x = false;
// Array
let courses = [1, 2];
let arr = [1, "2", 3, true];
// if i store an array inside another array
let stringArr = [["a"], ["b"]];
let testing = true;
//Tuples
const person = ["Abraham", 19];
// setting array of arrays in tuple 
const OauPeople = [
    ["John", 40],
    ["Peter", 30],
    ['Abraham', 30934]
];
//objects
let obj = {
    name: "Abraham",
    age: 19,
    isParsing: true
};
let people = {
    name: 'Abraham',
    age: 19,
    isPassing: true
};
let peo = {
    name: 'Abraham',
    age: 19,
    isPassing: true
};
// Unions
let result = 102;
let suprised = "passed";
//Type Assertions
let y = "hello";
y = "22";
//function
function sum(num1, num2) {
    return num1 + num2;
}
sum(10, 5);
// Generic
function getFirstElement(arr) {
    return arr[0];
}
getFirstElement([1, 2, 3, "Abraham"]);
// Enums
var Grade;
(function (Grade) {
    Grade["freshmen"] = "Firstmen in highschool";
    Grade["junior"] = "third year";
})(Grade || (Grade = {}));
function displayStudent(student) {
    const studentinfo = student.name + '/n' + student.age + "/n" + student.grade;
    document.body.innerHTML = studentinfo;
}
displayStudent({
    name: 'Abraham',
    age: 15,
    grade: Grade.junior
});
//# sourceMappingURL=index.js.map