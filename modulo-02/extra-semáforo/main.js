'use strict';

const choose = document.querySelector(".js-select");
const update = document.querySelector(".js-button");
const background = document.querySelector(".js-body");
const text = document.querySelector("h1");

update.addEventListener("click", changeStatus)

function changeStatus() {
  const updateValue = choose.value;
  console.log(updateValue)
  background.classList.remove("naranja");
  background.classList.remove("rojo");
  background.classList.remove("verde");
  background.classList.add(updateValue);
  addText(updateValue);
}

function addText(colorText) {
  if (colorText === "verde" || colorText === "naranja") {
    text.innerHTML = '¡Adelante, puede pasar!';
  } else {
    text.innerHTML = '¡Stop, no puede pasar!';
  }
}