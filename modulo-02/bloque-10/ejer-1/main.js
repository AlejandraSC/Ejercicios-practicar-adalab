'use strict';

//PRUEBA
/*
const Emoji = document.querySelector('.js-button');

function getEmoji() {
  fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.js-result').innerHTML = data.result;
    });
}
Emoji.addEventListener('click', getEmoji);
*/

//EJERCICIO 1
const button = document.querySelector('.js-button');
const resultToView = document.querySelector('.js-result');

function getRandomNumber() {
  fetch('https://api.rand.fun/text/password?length=4')
    .then((response) => response.json())
    .then((data) => {
      resultToView.innerHTML = data.result;
    });
}

button.addEventListener('click', getRandomNumber);

/*
*/