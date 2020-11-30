'use stric';

class square {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    return this.side * 4;
  }
  area() {
    return this.side * this.side;
  }
}

const square1 = new square(1);
const square3 = new square(3);
const square7 = new square(7);

console.log(square1.perimeter());
console.log(square3.perimeter());
