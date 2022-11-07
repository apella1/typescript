"use strict";
let id = 5;
let partyLeader = 'Peter Griffin';
let hasOccurred = false;
let x = 8;
x = 'Data Structures';
let age; // initializing the variable 
age = 7;
console.log('ID:', id);
// type inference in typescript - this is when ts takes the value to be expected as the initially assigned value 
let cars = ['Audi', 'Rolls Royce'];
let features = ['Jet', 6, false];
cars.push('Mercedes Benz');
let primeNumbers = [2, 3, 5, 7];
// tuple 
let animal = ['Mammal', 'Omnivorous'];
let person = [1, 'Jacob', true];
// tuple array 
let players;
players = [
    [7, 'Ronaldo'],
    [1, 'Curtois'],
    [30, 'Messi'],
    [10, 'Maddison']
];
console.log(players);
let participants;
participants = [
    [1, 'Jacob', 'Singer']
];
// Union 
let pid;
pid = 8;
pid = 7;
pid = 'My product';
console.log(pid); // the last assigned value holds the memory position 
// Enum - enumerated types 
// ? enums use cases in typescript  
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Down);
console.log(Direction2.Down);
const team = {
    name: 'Manchester United',
    year: 1927,
    founder: 'John Apella',
    wonLeague: true
};
const favoriteTeam = {
    name: 'Real Madrid',
    year: 2013,
    founder: 'John Wick'
};
console.log(team);
// type assertion - explicitly telling the compiler that we want to treat a different entity as a certain type 
let cid = 1;
let customerId = cid; // first syntax of type assertion - similar to Java's syntax when declaring linked lists
let pname = 'Cube';
let productName = pname;
console.log(productName);
// functions
// ? how to declare the type of return value for arrow functions - the return value type is declared after the parameters 
// when using arrow function with a single argument, now curly brackets are necessary however one is necessary when having a return statement 
const addNumbers = (x, y) => {
    return x + y;
};
console.log(addNumbers(2, 4));
function numDifference(a, b) {
    if (a > b) {
        return a - b;
    }
    else {
        return b - a;
    }
}
console.log(numDifference(5, 6));
function log(message) {
    console.log(message);
}
console.log(log(1));
console.log('Today is a great day.');
const user = {
    id: 1,
    name: 'Kyle',
    isPro: false,
    age: 30
};
const user2 = {
    id: 2,
    name: 'Jota',
    isPro: true
};
// user2.id = 8 - id cannot be reassigned because it's a read only property 
user2.name = 'Paul'; // reassigning the name. Same for accessing all the fields of all js objects(arrays)
console.log(user2);
// readonly property 
console.log(user.isPro);
const myArea = 'I own a large piece of land in the metaverse';
const computeArea = 78;
const numMultiplication = (h, t) => {
    return t * h;
};
console.log(numMultiplication(5, 4));
const sub = (h, t) => h - t; // curly braces are needed for a return statement 
console.log(sub(4, 3));
// protected, private cannot exist in type member. 
// When a class is implementing an interface, the properties of the interface must match the properties of the class
class Car {
    constructor(id, brand) {
        this.id = id;
        this.brand = brand;
    }
    bought() {
        return `${this.brand} has been bought.`;
    }
}
const car = new Car(1, 'Volvo');
const car2 = new Car(2, 'Toyota');
console.log(car, car2);
console.log(car.bought());
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    summary() {
        return `${name} is ${age} years old.`;
    }
}
class Employee extends Person {
    constructor(id, name, age, position) {
        super(id, name, age);
        this.position = position;
    }
}
const employee = new Employee(1, 'Peter Griffin', 56, 'Tech lead');
console.log(employee.position);
console.log(employee.summary());
// ? classes and subclasses 
// * Generics - used to build reusable components
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Cat', 'Level', 'Negative Capability']);
numArray.push(30);
console.log(numArray);
console.log(strArray);
