'use strict';

const numbers = [1, 2, 3];

function numeritos() {
  for (let i = 0; i < numbers.length; i++) {
    const mum = document.querySelector('.mum');
    const child = document.createElement('li');
    const newContent = document.createTextNode(numbers[i]);
    child.appendChild(newContent);
    mum.appendChild(child);
  }
}

numeritos();
