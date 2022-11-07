"use strict";
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    summary() {
        return `${this.title} was written by ${this.author}.`;
    }
}
const master = new Book('The Mastery of Love', 'Don Miguel Ruiz');
console.log(master.summary());
const grit = new Book('Grit', 'Angela Duckworth');
console.log(grit.summary());
// derived classes must contain a super call if they contain a constructor
// inheritance - extends 
class Paper extends Book {
    intro() {
        return `This is an amazing paper by ${this.author}.`;
    }
}
const paper = new Paper('Awaken The Giant Within', 'Tony Robbins');
console.log(paper.intro());
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    getArea() {
        return `The area of the rectangle is ${this.width * this.height}`;
    }
}
const rectangle = new Rectangle(10, 20);
console.log(rectangle.getArea());
class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }
}
const square = new Square(10);
console.log(square.getArea());
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return `The are of the circle is ${Math.PI * this.radius ** 2}`;
    }
}
const circle = new Circle(7);
console.log(circle.getArea());
