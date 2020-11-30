'use strict';
let breeds = '';
let number;
const btn = document.querySelector(".js-btn");


function getRandomBreed() {
  fetch('https://dog.ceo/api/breeds/list')
    .then(breedsResponse => breedsResponse.json())
    .then(breedsData => {
      console.log(breedsData.message);
      breeds = breedsData.message;
      return fetch('https://api.rand.fun/number/integer?min=0&max=93');
    })
    .then(numberResponse => numberResponse.json())
    .then(numberData => {
      console.log(numberData.result);
      number = numberData.result;
      fetch('https://dog.ceo/api/breed/' + breeds[number] + '/images/random')

        .then(imageResponse => imageResponse.json())
        .then(imageData => {
          const texto = document.querySelector('.randomBreed');
          texto.innerHTML = breeds[number];
          const img = document.querySelector('img');
          img.src = imageData.message;
        })
    });
}

btn.addEventListener("click", getRandomBreed);