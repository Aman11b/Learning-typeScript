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
