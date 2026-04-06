//basic types available in typescript
let age: number = 30
let course: string = "This is Typescript"
let isValid: boolean = true
let x: any = false

// Array
let courses: number[] = [1, 2]
let arr: any[] = [1, "2" , 3 , true]
// if i store an array inside another array
let stringArr: string[][] = [["a"] , ["b"] ]
let testing: boolean = true

//Tuples
const person: [string , number] = ["Abraham" , 19]

// setting array of arrays in tuple 
const OauPeople: [string, number][] = [
    ["John" , 40],
    ["Peter" , 30],
    ['Abraham', 30934]
]

//objects
let obj: object = {
    name: "Abraham",
    age: 19,
    isParsing: true
}

//custom type
//you define the types of values you want to parse
type Student = {
    name: string, 
    age: number, 
    isPassing: boolean
}

let people: Student = {
    name: 'Abraham', 
    age: 19,
    isPassing: true
}

// interfaces
interface student {
    name: string, 
    age: number, 
    isPassing: boolean
}

let peo: student = {
    name : 'Abraham', 
    age: 19,
    isPassing: true
}

// Unions
let result: string | number | boolean = 102
type isPassing = "passed" | "failed"
let suprised: isPassing = "passed"

//Type Assertions
let y: any = "hello"
y = <string> "22"

//function
function sum(num1: number, num2: number): number {
    return num1 + num2
}

sum(10, 5);

// Generic
function getFirstElement<ArrType>(arr: ArrType[]) {
    return arr[0];
}

getFirstElement<number | string>([1, 2, 3, "Abraham"])


// Enums
enum Grade {
    freshmen = "Firstmen in highschool" ,
    junior = "third year"
}

interface StudentObject {
    name: string,
    age?: number,
    grade: Grade
}

function displayStudent(student: StudentObject): void {
 const studentinfo: string = student.name + '/n' + student.age + "/n" + student.grade

 document.body.innerHTML = studentinfo
}

displayStudent({
    name: 'Abraham', 
    age: 15,
    grade: Grade.junior
})

function identity(value: unknown): unknown {
    return value;
}

const dentitiy: unknown = identity("Hello, Abraham");
console.log(dentitiy);