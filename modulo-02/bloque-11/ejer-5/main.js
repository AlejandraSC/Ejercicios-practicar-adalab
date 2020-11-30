const claro = document.querySelector('.input1');
const oscuro = document.querySelector('.input2');
const body = document.querySelector('.body');
const check = localStorage.getItem('background');

function radioButton(event) {
  if (event.currentTarget.value === 'clarito') {
    body.classList.add('white');
    body.classList.remove('dark');
  } else {
    body.classList.add('dark');
    body.classList.remove('white');
  }
  localStorage.setItem('background', event.currentTarget.value);
}

function chosenColour() {
  if (check === 'clarito') {
    body.classList.add('white');
    body.classList.remove('dark');
  } else {
    body.classList.add('dark');
    body.classList.remove('white');
  }
}

chosenColour();
claro.addEventListener('click', radioButton);
oscuro.addEventListener('click', radioButton);
