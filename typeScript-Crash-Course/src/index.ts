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

let article: readonly [number, string, boolean] = [11, "title", true];
article = [12, "two", false];
console.log(article);

const [id, title, published] = article;
console.log(id);

// enums->set of names constant values

enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}
// here 0,1,2,3,4 -> sun mon tue ...

const today: Days = Days.Wednesday;
console.log(`Today is ${Days[today]}`);

// interface-> define shape and structure of object->specifies property, method and its type
/** *
 * interface specified object structure including property names types and optional/required status.
 * contracts->object or classes adhering to an interface must implement its defined structure and methods
 * type checking-> typescript checks if object meet the interface's required catching type error early
 * code clarity-> interface document expected object properties and enhance code readability,aiding object usage understanding
 *
 */

interface PersonEx1 {
  name: string;
  age: number;
}

const John: PersonEx1 = {
  name: "Jhon",
  age: 30,
};

// interface method and parameter

interface PersonEx2 {
  name: string;
  age: number;
  greet(message: string): void;
}

const Sarah: PersonEx2 = {
  name: "Sarah",
  age: 30,
  greet(message: string) {
    console.log(`${this.name} says ${message}`);
  },
};

Sarah.greet("Hello, TypeScript");

// reopen interface and used cases-> expanding interface

// Homepage interface declaration
interface Setting {
  readonly theme: boolean;
  font: string;
}

// article page interface reopening
interface Setting {
  sidebar: boolean;
}

// contact page interface
interface Setting {
  external: boolean;
}

let userSetting: Setting = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true,
};

// used cases
// -> modular development
// -> progressive enhancement
// -> clear separation of concerns

// built-in interface

// const imgElement: HTMLImageElement = document.createElement("img");
// imgElement.src = "img.jpg";
// imgElement.alt = "My Image";

// interface vs Type alias
// interface
interface AnimalExInterface {
  type: string;
}
interface Dog extends AnimalExInterface {
  bark(): void;
}
class Labrador implements Dog {
  type: string = "dog";
  bark() {
    console.log("woof !");
  }
}
// -> can be extended,compatible,extensibility.readability and style,

// type
type AnimalExType = {
  type: string;
};
type Monkey = AnimalExInterface & {
  bark(): void;
};
const labrador: Monkey = {
  type: "monkey",
  bark() {
    console.log("woof");
  },
};
// -> cant be extended,used to define union instructions

// class-> blueprint for creating object with shared method and properties

class Product {
  id: number;
  name: string;
  price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getProductInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`;
  }
}
const product1 = new Product(1, "wigit", 20.7);
console.log(product1.getProductInfo());

// class access modifiers

// -> public (default)
class MyClassPublic {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const instancePublic = new MyClassPublic("Joo");
console.log(instancePublic.name);

// ->private
class MyClassPrivate {
  private secret: string;
  constructor(secret: string) {
    this.secret = secret;
  }
  revealSecret() {
    console.log(this.secret);
  }
}
const instancePrivate = new MyClassPrivate("My secret");
// console.log(instancePrivate.secret);
instancePrivate.revealSecret();

// protected (accessible from within the class or subclass)
class Parent {
  protected familyName: string;
  constructor(name: string) {
    this.familyName = name;
  }
}
class Child extends Parent {
  introduceFamily() {
    console.log(`Our family name is ${this.familyName}`);
  }
}

const parentEx = new Parent("Smith");
const childEx = new Child("johnson");

// console.log(parent.familyName);
childEx.introduceFamily();

// class accessor (getter setter)

class ProductExAccessor {
  private _price: number;
  constructor(private id: number, private name: string) {
    this._price = 0;
    // default value
  }
  // public getter for price
  get price(): number {
    return this._price;
  }
  // public setter
  set price(newPrice: number) {
    if (newPrice >= 0) {
      this._price = newPrice;
    } else {
      console.log(`Price cannot be negative`);
    }
  }
  getProductInfo(): string {
    return `ID: ${this.id} ,Price: ${this._price}`;
  }
}
const productEx = new ProductExAccessor(1, "wig");
console.log(productEx.getProductInfo());
// this is like calling setter function
productEx.price = 20.0;
console.log(productEx.getProductInfo());
productEx.price = -5;

// class static members (properties and methods belongs to class itself rather then instances-> can  be used without instance of class)
class ProductStaticMembers {
  private static nextId: number = 1;
  constructor(private id: number, private name: string) {}
  static generateNextId(): number {
    return ProductStaticMembers.nextId++;
  }
  getProductInfo(): string {
    return `ID: ${this.id} Name: ${this.name}`;
  }
}
const product1static = new ProductStaticMembers(
  ProductStaticMembers.generateNextId(),
  "Widget"
);
const product2static = new ProductStaticMembers(
  ProductStaticMembers.generateNextId(),
  "Gad"
);

console.log(product1static.getProductInfo());
console.log(product2static.getProductInfo());

/**********************************
 *class implement interface
 **************************************/
class ProductImplementInterface {
  private static nextId: number = 1;
  // shorthand of the bigger this.id and all
  constructor(private id: number, private name: string) {}
  static generateNextId(): number {
    return ProductImplementInterface.nextId++;
  }
  getProductInfo(): string {
    return `ID: ${this.id} Name: ${this.name}`;
  }
}
const product1implement = new ProductImplementInterface(
  ProductImplementInterface.generateNextId(),
  "wid"
);
const product2implement = new ProductImplementInterface(
  ProductImplementInterface.generateNextId(),
  "loo"
);

console.log(product1implement.getProductInfo());
console.log(product2implement.getProductInfo());

/*****************************************
 abstract classes and members (blueprint of other class cant be instanceated on there own also has abstract methods which are declaration but not implemented need subclass to implement)
 ******************************************/

abstract class AbstractItem {
  private static nextID: number = 1;
  constructor(public id: number, protected name: string) {}
  static generateNextId(): number {
    return AbstractItem.nextID++;
  }
  abstract getItemInfo(): string;
}

class Item extends AbstractItem {
  constructor(id: number, name: string) {
    super(id, name);
  }
  getItemInfo(): string {
    return `ID: ${this.id}, Name:  ${this.name}`;
  }
}

const item1 = new Item(AbstractItem.generateNextId(), "heh");
console.log(item1.getItemInfo());

/**************************************
polymorphism and methods override (object of different classes treated as object of single classes)
 *******************************************/

// define abstract class
abstract class AbstractEntity {
  private static nextId: number = 1;
  protected constructor(public id: number, protected name: string) {}
  static generateNextId(): number {
    return AbstractEntity.nextId++;
  }
  abstract getEntityInfo(): string;
}
// create a concrete subclass
class Entity extends AbstractEntity {
  constructor(id: number, name: string) {
    super(id, name);
  }
  getEntityInfo(): string {
    return `ID: ${this.id} Name: ${this.name}`;
  }
}

// create another concrete subclass
class AnotherEntity extends AbstractEntity {
  constructor(id: number, name: string) {
    super(id, name);
  }
  getEntityInfo(): string {
    return `ID: ${this.id} Name: ${this.name} Additional Info...`;
  }
}
// generate unique IDs for entity using the static method
const entity1: AbstractEntity = new Entity(
  AbstractEntity.generateNextId(),
  "wig"
);
const entity2: AbstractEntity = new AnotherEntity(
  AbstractEntity.generateNextId(),
  "God"
);

// polymorphism call
console.log(entity1.getEntityInfo());
console.log(entity2.getEntityInfo());

/**
 * class is creating object
 * interface used to define the shape of object
 *
 */

/**
 * GENERICS
 * allow t write reusable code by passing type as a parameter to another type weather its class interface or function
 */
function returnType<T>(val: T): T {
  return val;
}

const numValue: number = returnType<number>(100);
const strValue: string = returnType<string>("heh");
const boolValue: boolean = returnType<boolean>(true);
const arrValue: number[] = returnType<number[]>([1, 2, 3, 4]);

console.log(`Array Value: ${arrValue}`);
