'use strict';

class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }
  perimeter() {
    return this.base * this.numberOfSides;
  }
  area() {
    return this.base * this.height;
  }
}

class Square extends Polygon {
  constructor(side) {
    super(side, side, 4);
  }
}

class Triangle extends Polygon {
  constructor(base, height) {
    super(base, height, 3);
  }
  area() {
    return super.area() / 2;
  }
}

const Square1 = new Square(4);
const Triangle1 = new Triangle(4, 3);

console.log(Square1.perimeter());
console.log(Square1.area());

console.log(Triangle1.perimeter());
console.log(Triangle1.area());
