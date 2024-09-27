let id: number = 5;

let partyLeader: string = "Peter Griffin";

let hasOccurred: boolean = false;

let x: any = 8;

x = "Data Structures";

let age: number; // initializing the variable

age = 7;

console.log("ID:", id);

// type inference in typescript - this is when ts takes the value to be expected as the initially assigned value

// Arrays - arrays can be of various data types including string, number, boolean or union

// string arrays

let cars: String[] = ["Audi", "Rolls Royce"];
cars.push("Mercedes Benz");

// any arrays

let features: any[] = ["Jet", 6, false];

// number arrays

let primeNumbers: number[] = [2, 3, 5, 7];

// union arrays

let books: (string | number)[] = ["Deep Work", 1964, "Narrations of Naval"];

// Tuples- locking types to a fixed element position
// the number of items in the source must match those at the target and they must be of the same data type

let animal: [string, string, string] = ["Mammal", "Omnivorous", "Carnivorous"];

let person: [number, string, boolean] = [1, "Jacob", true];

// tuple array

let players: [number, string][];

players = [
  [7, "Ronaldo"],
  [1, "Curtois"],
  [30, "Messi"],
  [10, "Maddison"],
  [10, "Rashford"],
];

console.log(players);

let participants: [number, string, string][];

participants = [
  [1, "Jacob", "Singer"],
  [2, "Martha", "Athlete"],
];

// Union
// A union type is not limited to two data types

let pid: string | number;

pid = 8;
pid = 7;
pid = "My product";

console.log(pid); // the last assigned value holds the memory position

let isActive: boolean | number | string;
isActive = "Yellow";
isActive = 78;
isActive = false;

// Enum - enumerated types
// ? enums use cases in typescript

enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction1.Down);
console.log(Direction2.Down);

// Objects

type Team = {
  name: string;
  year: number;
  founder: string;
  players: (string | number)[];
  wonLeague?: boolean; // the ? makes the element optional while defining a new object with the type Team
};

const team: Team = {
  name: "Manchester United",
  year: 1927,
  founder: "John Apella",
  players: ["Rashford", "Tony", "Fred", 1],
  wonLeague: true,
};

const favoriteTeam: Team = {
  name: "Real Madrid",
  year: 2013,
  founder: "John Wick",
  players: ["Manson", "Mark", 77],
};

let otherTeam: Team = {
  name: "Gor Mahia",
  year: 1883,
  founder: "Mike Holbert",
  players: ["Charles", "Isbell", 22],
  wonLeague: true,
};

console.log(team);

// type assertion - explicitly telling the compiler that we want to treat a different entity as a certain type

let cid: any = 1;
let customerId = <number>cid; // first syntax of type assertion - similar to Java's syntax when declaring linked lists

let pname: any = "Cube";
let productName = pname as string;

console.log(productName);

// functions
// the return value type is declared after the parameters
// when using arrow function with a single argument, no curly brackets are necessary however one is necessary when having a return statement

const addNumbers = (x: number, y: number): number => {
  return x + y;
};

console.log(addNumbers(2, 4));

function numDifference(a: number, b: number): number {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}

console.log(numDifference(5, 6));
console.log(numDifference(-2, -3));

function log(message: string | number): void {
  console.log(message);
}

console.log(log(1));

console.log("Today is a great day.");

// Interfaces
// interfaces can't be used with primitives or with unions - types can
// all the fields defined within an interface have to be included when assigning values using the interface type declaration

interface User {
  readonly id: number;
  name: string;
  isPro: boolean;
  age?: number;
}

const user: User = {
  id: 1,
  name: "Kyle",
  isPro: false,
  age: 30,
};

const user2: User = {
  id: 2,
  name: "Jota",
  isPro: true,
};

// user2.id = 8 - id cannot be reassigned because it's a read only property

user2.name = "Paul"; // reassigning the name. Same for accessing all the fields of all js objects(arrays)
console.log(user2);

// readonly property

console.log(user.isPro);

// types however can be used with unions
// types can be used with primitives and objects alike

type Area = string | number;

const myArea: Area = "I own a large piece of land in the metaverse";

const computeArea: Area = 78;

// *  using interfaces with functions
// when interfaces are used with functions, it's more of making it so that we can't change the types of the parameters of the function
// the parameters within the functions however have to be declared nonetheless with the types included

interface MathFunc {
  (h: number, t: number): number;
}

const numMultiplication: MathFunc = (h, t) => {
  return t * h;
};

console.log(numMultiplication(5, 4));

const sub: MathFunc = (h, t) => h - t; // curly braces are needed for a return statement

console.log(sub(4, 3));

// Classes - available in js from es6
// this keyword - used to denote the current instance that we're at
// public, private and protected properties for classes
// by default, the properties of a class are public
// ! private must always precede readonly
// protected - can only be accessed from the class or a class that's extended from the specific class

interface CarInterface {
  id: number;
  brand: string;
  bought(): string;
}

// protected, private cannot exist in type member.
// When a class is implementing an interface, the properties of the interface must match the properties of the class

class Car implements CarInterface {
  readonly id: number;
  brand: string;

  constructor(id: number, brand: string) {
    this.id = id;
    this.brand = brand;
  }

  public bought() {
    return `${this.brand} has been bought.`;
  }
}

const car = new Car(1, "Volvo");
const car2 = new Car(2, "Toyota");

console.log(car, car2);
console.log(car.bought());

interface PersonInterface {
  id: number;
  name: string;
  age: number;
  // hobbies: string[],
  summary(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;
  age: number;
  // hobbies: string[]

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
    // this.hobbies = hobbies;
  }

  summary() {
    return `${name} is ${age} years old.`;
  }
}

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, age: number, position: string) {
    super(id, name, age);

    this.position = position;
  }
}

const employee = new Employee(1, "Peter Griffin", 56, "Tech lead");

console.log(employee.position);
console.log(employee.summary());

// ? classes and subclasses

// * Generics - used to build reusable components

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["Cat", "Level", "Negative Capability"]);

numArray.push(30);

console.log(numArray);
console.log(strArray);
console.log(numArray[0].toFixed(2));
