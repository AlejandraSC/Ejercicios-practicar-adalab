'use strict';

class Square {
  perimeter(side) {
    return side * 4;
  }
  area(side) {
    return side * side;
  }
}

const square = new Square();

console.log(square.perimeter(9));

console.log(square.area(9));
