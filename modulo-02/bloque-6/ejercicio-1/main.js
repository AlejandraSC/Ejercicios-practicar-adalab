//EJERCICIO 1



let adalaber1 = {};
/*
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.profession = 'periodista';
*/


adalaber1.name = 'Rocio';
adalaber1.age = 25;
adalaber1.profession = 'actriz';




let parrafo = document.querySelector(".p");

parrafo.innerHTML = "Mi nombre es " + adalaber1.name + " , tengo " + adalaber1.age + " años y soy " + adalaber1.profession;



//EJERCICIO 2 
function run() {
  console.log("Estoy corriendo")
}

run();

const distance = 50;

function runAMarathon(distance) {
  console.log("Estoy corriendo un maratón de " + distance + " kilómetros")
}

runAMarathon(distance);

//EJERCICIO 3
function showBio() {
  console.log("Mi nombre es " + adalaber1.name + ", tengo " + adalaber1.age + " años y soy " + adalaber1.profession)
}
showBio();


//EJERCICIO 4 
const button = document.querySelector('.button');

button.addEventListener('click', investigating);

function investigating(event) {
  console.log
}