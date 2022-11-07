class Book {
    title: string;
    author: string;

    constructor(title: string, author: string) {
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

// interfaces

interface Shape {
    getArea: () => number | string;
}

class Rectangle implements Shape {
    constructor(protected readonly width: number, protected readonly height: number) {
        this.width = width;
        this.height = height;
    }

    getArea () {
        return `The area of the rectangle is ${this.width * this.height}`
    }
}

const rectangle = new Rectangle(10, 20);
console.log(rectangle.getArea());

 
class Square extends Rectangle {
    constructor(width: number) {
        super(width, width);
    }
}

const square = new Square(10);
console.log(square.getArea());

// Area of a circle 

interface Round {
    radius: number;
    getArea: () => number | string;
}

class Circle implements Round {
    radius: number;

    constructor (radius: number) {
        this.radius = radius;
    }

    getArea() {
        return `The are of the circle is ${Math.PI * this.radius ** 2}`
    }
}

const circle = new Circle(7);
console.log(circle.getArea());
