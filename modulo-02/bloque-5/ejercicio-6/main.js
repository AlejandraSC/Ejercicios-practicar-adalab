'use strict';

const inputElement = document.querySelector('.input');
const pElement = document.querySelector('.p');

function handleChange(event) {
  console.log(event.currentTarget);
  pElement = event.currentTarget;
}

inputElement.addEventListener('change', handleChange);

divResult.innerhtml += input;