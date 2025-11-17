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
let num = [1, 2, 3];
for (let i = 0; i < num.length; i++) {
    console.log(`Numbers${num[i]}`);
}
// multi dimensional array
let arrayOne = [1, 2, 3, 4, 5];
let arrayTwo = ["a", "bn"];
let arrayThree = [1, 2, 3, "b"];
// tuples -> similar to array with fix number of elements
let article = [11, "title", true];
article = [12, "two", false];
console.log(article);
const [id, title, published] = article;
console.log(id);
// enums->set of names constant values
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
// here 0,1,2,3,4 -> sun mon tue ...
const today = Days.Wednesday;
console.log(`Today is ${Days[today]}`);
const John = {
    name: "Jhon",
    age: 30,
};
const Sarah = {
    name: "Sarah",
    age: 30,
    greet(message) {
        console.log(`${this.name} says ${message}`);
    },
};
Sarah.greet("Hello, TypeScript");
let userSetting = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true,
};
class Labrador {
    type = "dog";
    bark() {
        console.log("woof !");
    }
}
const labrador = {
    type: "monkey",
    bark() {
        console.log("woof");
    },
};
// -> cant be extended,used to define union instructions
// class-> blueprint for creating object with shared method and properties
class Product {
    id;
    name;
    price;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`;
    }
}
const product1 = new Product(1, "wigit", 20.7);
console.log(product1.getProductInfo());
// class access modifiers
// -> public (default)
class MyClassPublic {
    name;
    constructor(name) {
        this.name = name;
    }
}
const instancePublic = new MyClassPublic("Joo");
console.log(instancePublic.name);
// ->private
class MyClassPrivate {
    secret;
    constructor(secret) {
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
    familyName;
    constructor(name) {
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
    id;
    name;
    _price;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this._price = 0;
        // default value
    }
    // public getter for price
    get price() {
        return this._price;
    }
    // public setter
    set price(newPrice) {
        if (newPrice >= 0) {
            this._price = newPrice;
        }
        else {
            console.log(`Price cannot be negative`);
        }
    }
    getProductInfo() {
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
    id;
    name;
    static nextId = 1;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return ProductStaticMembers.nextId++;
    }
    getProductInfo() {
        return `ID: ${this.id} Name: ${this.name}`;
    }
}
const product1static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Widget");
const product2static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Gad");
console.log(product1static.getProductInfo());
console.log(product2static.getProductInfo());
/**********************************
 *class implement interface
 **************************************/
class ProductImplementInterface {
    id;
    name;
    static nextId = 1;
    // shorthand of the bigger this.id and all
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return ProductImplementInterface.nextId++;
    }
    getProductInfo() {
        return `ID: ${this.id} Name: ${this.name}`;
    }
}
const product1implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "wid");
const product2implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "loo");
console.log(product1implement.getProductInfo());
console.log(product2implement.getProductInfo());
/*****************************************
 abstract classes and members (blueprint of other class cant be instanceated on there own also has abstract methods which are declaration but not implemented need subclass to implement)
 ******************************************/
class AbstractItem {
    id;
    name;
    static nextID = 1;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return AbstractItem.nextID++;
    }
}
class Item extends AbstractItem {
    constructor(id, name) {
        super(id, name);
    }
    getItemInfo() {
        return `ID: ${this.id}, Name:  ${this.name}`;
    }
}
const item1 = new Item(AbstractItem.generateNextId(), "heh");
console.log(item1.getItemInfo());
/**************************************
polymorphism and methods override (object of different classes treated as object of single classes)
 *******************************************/
// define abstract class
class AbstractEntity {
    id;
    name;
    static nextId = 1;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return AbstractEntity.nextId++;
    }
}
// create a concrete subclass
class Entity extends AbstractEntity {
    constructor(id, name) {
        super(id, name);
    }
    getEntityInfo() {
        return `ID: ${this.id} Name: ${this.name}`;
    }
}
// create another concrete subclass
class AnotherEntity extends AbstractEntity {
    constructor(id, name) {
        super(id, name);
    }
    getEntityInfo() {
        return `ID: ${this.id} Name: ${this.name} Additional Info...`;
    }
}
// generate unique IDs for entity using the static method
const entity1 = new Entity(AbstractEntity.generateNextId(), "wig");
const entity2 = new AnotherEntity(AbstractEntity.generateNextId(), "God");
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
function returnType(val) {
    return val;
}
const numValue = returnType(100);
const strValue = returnType("heh");
const boolValue = returnType(true);
const arrValue = returnType([1, 2, 3, 4]);
console.log(`Array Value: ${arrValue}`);
//# sourceMappingURL=index.js.map