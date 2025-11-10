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
console.log(add(10, 40));
// void never
// void do not return anything
function greet(name) {
    console.log(`Hello ${name}`);
}
function noReturnValue() {
    // this function does not return a value (implicitly return undefined)
}
// never
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        // this function never exits
    }
}
// union type -> value of multiple value
let myVar;
myVar = "hello";
console.log(myVar);
myVar = 42;
console.log(myVar);
// literal type -> only take a specific value
let direction;
function setColor(color) { }
// nullable type  -> either any type or null
let username = "glitch";
let age = null;
function greetUser(username) {
    if (username === null) {
        console.log(`Hello Guest!`);
    }
    else {
        console.log(`Hello, ${username}`);
    }
}
greetUser("A man");
greetUser(null);
let myName = "Samsa";
let myValue = 10;
const alice = {
    name: "Alice",
    age: 30,
    email: "alice@gmail.com",
};
const bob = {
    name: "bob",
    age: 56,
};
console.log(alice);
console.log(bob);
const person1 = {
    name: "jhon",
    age: 30,
    address: "dfas 1231",
    phone: "123-456-7890",
};
// arrays
let num = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < num.length; i++) {
    console.log(`Numbers${num[i]}`);
}
//# sourceMappingURL=index.js.map