'use strict';

//EJERCICIO 1
get100Numbers();

function get100Numbers() {

  var miarray = new Array();

  for (let index = 1; index <= 100; index++) {
    miarray.push(index);
    console.log(miarray[index-1])
    miarray.length
  }
  return miarray
}


//EJERCICIO 2

function getReversed100Numbers() {
  get100Numbers();
miarray.reverse(index);
Array.reverse();
}

getReversed100Numbers();
console.log();


