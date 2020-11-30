'use strict';

const inputButton = document.querySelector(".js-button");
const select = document.querySelector(".select");
const container = document.querySelector(".js-container");
const face = document.querySelector(".js-face");


inputButton.addEventListener("click", updateFace)

function updateFace() {
  const selectValue = select.value;
  face.innerHTML = selectValue;

  const valueRandom = getRandom();
  if (valueRandom % 2 === 1) {
    container.classList.remove("yellow-color")
    container.classList.add("fire-color");
  } else {
    container.classList.remove("fire-color")
    container.classList.add("yellow-color")
  }
}


function getRandom() {
  const random = parseInt(Math.random() * 100);
  return random;
};