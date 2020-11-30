'use strict';

const cityOptions = ['Madrid', 'Sevilla', 'Granada'];
const select = document.querySelector('.js-selectCity');
let imagesContainer = document.querySelector('.imagesContainer');
const img1 = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');
imagesContainer.appendChild(img1);
imagesContainer.appendChild(img2);
imagesContainer.appendChild(img3);

function cities() {
  for (let i = 0; i < cityOptions.length; i++) {
    const option = document.createElement('option');
    const newContent = document.createTextNode(cityOptions[i]);
    option.appendChild(newContent);
    select.appendChild(option);
    option.id = i;
  }
}

function getImages(url1, url2, url3) {
  img1.src = url1;
  img1.width = 300;
  img1.height = 300;
  img2.src = url2;
  img2.width = 300;
  img2.height = 300;
  img3.src = url3;
  img3.width = 300;
  img3.height = 300;
}

function getCities() {
  const city = select.value;
  if (city === 'Madrid') {
    getImages('./images/madrid1.jpg', './images/madrid2.jpg', './images/madrid3.jpg');
  } else if (city === 'Sevilla') {
    getImages('./images/sevilla1.jpg', './images/sevilla2.jpg', './images/sevilla3.jpg');
  } else if (city === 'Granada') {
    getImages('./images/granada1.jpg', './images/granada2.jpg', './images/granada3.jpg');
  }
}
cities();

select.addEventListener('click', getCities);
