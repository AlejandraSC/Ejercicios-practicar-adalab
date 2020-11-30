'use strict';

const text = document.querySelector(".text");
const paragraph = document.querySelector("p");

function knowing() {
  paragraph.innerHTML = text.value;
}

text.addEventListener("keyup", knowing);

localStorage.setItem('name1', 'Alejandra');

const name = localStorage.getItem('name');
console.log(name); 

localStorage.setItem('name2', 'Pepito');

localStorage.setItem('name3', 'Carmelo');

