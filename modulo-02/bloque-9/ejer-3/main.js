'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];
const par = [];
const tres = [];

const bestLostNomber = function () {
  for (let i = 0; i < lostNumbers.lengt; i++) {

    if (lostNumbers[i] % 2 === 0) {
      par.push(lostNumbers[i]);
    }
    if (lostNumbers[i] % 3 === 0) {
      tres.push(lostNumbers[i]);
    }
  }
  console.log(par.concat(tres));
}

bestLostNomber;
console.log(par);
console.log(tres);