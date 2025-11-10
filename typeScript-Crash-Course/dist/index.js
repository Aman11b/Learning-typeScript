"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(Math.floor(11.3));
//->>> type annotation
// dynamic type determination
let greeting = "hello world";
console.log(greeting);
// not advised
// any type
let myVariable = 42;
myVariable = "hello TypeScript";
console.log(myVariable);
// do not check anything not advised
// object
let person = {
    name: "Alice",
    age: 23,
    jobTitle: "Engineer",
    address: {
        street: "adsd",
        city: "sdadf",
    },
};
console.log(person);
// function
function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(2, 5));
// optional parameter -. that can or cannot be given ?
function greetOptional(name, age) {
    if (age !== undefined) {
        console.log(`Helloe , ${name} ! you are ${age} year old`);
    }
    else {
        console.log(`Hello, ${name}`);
    }
}
greetOptional("alice");
greetOptional("alive", 34);
// default parameter =
function greetOptional1(name, age = 25) {
    console.log(`Helloe , ${name} ! you are ${age} year old`);
}
greetOptional1("alice");
// function rest parameter ->number of argument as array
function addAll(...num) {
    let res = 0;
    num.forEach((value) => {
        res += value;
    });
    return res;
}
console.log(addAll(1, 2, 3, 4, 5, 5));
// arrow function
const addWithArrow = (num1, num2) => num1 + num2;
console.log(addWithArrow(10, 20));
// anonymous function -> no names
const add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(10, 20));
//# sourceMappingURL=index.js.map