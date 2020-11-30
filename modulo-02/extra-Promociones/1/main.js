'use strict';

const promos = [{
    promo: 'A',
    name: 'Ada',
    students: [{
        id: 'id-1',
        name: 'Sofía',
        age: 20
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22
      }
    ]
  },
  {
    promo: 'B',
    name: 'Borg',
    students: [{
        id: 'id-4',
        name: 'Julia',
        age: 23
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25
      }
    ]
  },
  {
    promo: 'C',
    name: 'Clarke',
    students: [{
        id: 'id-7',
        name: 'Lidia',
        age: 26
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28
      }
    ]
  }
];

const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];
const lista = document.querySelector(".js-result");

/*EJERCICIO 1, 2, 3 
function promosF() {
  lista.innerHTML = `<ul>`;
  for (let i = 0; i < promos.length; i++) {
    lista.innerHTML += `<li>
    Nombre: ${promos[i].name} <br>Promo: ${promos[i].promo} <br>Número de alumnas: ${promos[i].students.length} <br><br>
    </li>`;
  }
  lista.innerHTML += `</ul>`
}

promosF();


//EJERCICIO 4
function nameAge() {
  lista.innerHTML = `<ul>`;
  for (let i = 0; i < promos.length; i++) {
    lista.innerHTML += `<p> Nombre: ${promos[i].name}  </p>`;
    lista.innerHTML += `<ul>`;
    for (let t = 0; t < promos[i].students.length; t++) {
      lista.innerHTML += `<li> ${promos[i].students[t].name}, ${promos[i].students[t].age} </li>`;
    }
    lista.innerHTML += `</ul>`
  }
  lista.innerHTML += `</ul>`
}


function nameAge() {
  lista.innerHTML = `<ul>`;
  for (let i = 0; i < promos.length; i++) {
    let promoActual = promos[i];
    lista.innerHTML += `<p> Nombre: ${promoActual.name}  </p>`;
    lista.innerHTML += `<ul>`;
    for (let t = 0; t < promoActual.students.length; t++) {
      let actualStudent = promoActual.students[t]
      lista.innerHTML += `<li> ${actualStudent.name} , ${actualStudent.age} </li>`;
    }
    lista.innerHTML += `</ul>`
  }
  lista.innerHTML += `</ul>`
}

nameAge();


//EJERCICIO 5
function nameAgeId() {
  lista.innerHTML = `<ul>`;
  for (let i = 0; i < promos.length; i++) {
    lista.innerHTML += `<p> Nombre: ${promos[i].name}  </p>`;
    lista.innerHTML += `<ul>`;
    for (let t = 0; t < promos[i].students.length; t++) {
      lista.innerHTML += `<li> ${promos[i].students[t].id} > ${promos[i].students[t].name}, ${promos[i].students[t].age} </li>`;
    }
    lista.innerHTML += `</ul>`
  }
  lista.innerHTML += `</ul>`
}

nameAgeId();
*/

//EJERCICIO 6
function nameAgeId() {
  lista.innerHTML = `<ul>`;
  for (let i = 0; i < promos.length; i++) {
    lista.innerHTML += `<p> Nombre: ${promos[i].name}  </p>`;
    lista.innerHTML += `<ul>`;
    for (let t = 0; t < promos[i].students.length; t++) {
      if (promos[i].students[t].age % 2 == 0) {
        lista.innerHTML += `<li> ${promos[i].students[t].id} > ${promos[i].students[t].name}, ${promos[i].students[t].age} </li>`;
      }
    }
    lista.innerHTML += `</ul>`
  }
  lista.innerHTML += `</ul>`
}

nameAgeId();

//EJERCICIO 7 