console.log(Math.floor(11.3));

//->>> type annotation

// dynamic type determination
let greeting = "hello world";
console.log(greeting);
// not advised

// any type
let myVariable: any = 42;
myVariable = "hello TypeScript";
console.log(myVariable);
// do not check anything not advised

// object

let person: {
  name: string;
  age: number;
  jobTitle?: string;
  address: {
    street: string;
    city: string;
  };
} = {
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
function calculateArea(length: number, width: number): number {
  return length * width;
}

console.log(calculateArea(2, 5));

// optional parameter -. that can or cannot be given ?
function greetOptional(name: string, age?: number) {
  if (age !== undefined) {
    console.log(`Helloe , ${name} ! you are ${age} year old`);
  } else {
    console.log(`Hello, ${name}`);
  }
}
greetOptional("alice");
greetOptional("alive", 34);

// default parameter =

function greetOptional1(name: string, age = 25) {
  console.log(`Helloe , ${name} ! you are ${age} year old`);
}
greetOptional1("alice");

// function rest parameter ->number of argument as array

function addAll(...num: number[]): number {
  let res = 0;
  num.forEach((value) => {
    res += value;
  });
  return res;
}
console.log(addAll(1, 2, 3, 4, 5, 5));

// arrow function
const addWithArrow = (num1: number, num2: number): number => num1 + num2;
console.log(addWithArrow(10, 20));

// anonymous function -> no names

const add = function (num1: number, num2: number): number {
  return num1 + num2;
};
console.log(add(10, 40));

// void never
// void do not return anything
function greet(name: string): void {
  console.log(`Hello ${name}`);
}
function noReturnValue(): void {
  // this function does not return a value (implicitly return undefined)
}

// never
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // this function never exits
  }
}

// union type -> value of multiple value
let myVar: string | number;
myVar = "hello";
console.log(myVar);
myVar = 42;
console.log(myVar);

// literal type -> only take a specific value
let direction: "left" | "right" | "up" | "down";

function setColor(color: "red" | "blue" | "green") {}

// nullable type  -> either any type or null

let username: string | null = "glitch";
let age: number | null = null;

function greetUser(username: string | null) {
  if (username === null) {
    console.log(`Hello Guest!`);
  } else {
    console.log(`Hello, ${username}`);
  }
}
greetUser("A man");
greetUser(null);

// type alias

type MySting = string;
let myName: MySting = "Samsa";
type MyStringOrNumber = string | number;
let myValue: MyStringOrNumber = 10;

type Employee = {
  name: string;
  age: number;
  email?: string;
};

const alice: Employee = {
  name: "Alice",
  age: 30,
  email: "alice@gmail.com",
};
const bob: Employee = {
  name: "bob",
  age: 56,
};
console.log(alice);
console.log(bob);

// intersection type -> combine multiple types into one

type FirstType = {
  name: string;
  age: number;
};
type SecondType = {
  address: string;
  phone: string;
};
type CombineType = FirstType & SecondType;
const person1: CombineType = {
  name: "jhon",
  age: 30,
  address: "dfas 1231",
  phone: "123-456-7890",
};

// arrays

let num: number[] = [1, 2, 3];
for (let i = 0; i < num.length; i++) {
  console.log(`Numbers${num[i]}`);
}

// multi dimensional array
let arrayOne: number[] = [1, 2, 3, 4, 5];
let arrayTwo: string[] = ["a", "bn"];
let arrayThree: (string | number)[] = [1, 2, 3, "b"];

// tuples -> similar to array with fix number of elements
