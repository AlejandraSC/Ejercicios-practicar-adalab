'use strict';

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false },
];

//Paint
function paintTasks() {
  const listElement = document.querySelector('.js-list');
  listElement.innerHTML = '';

  for (const task of tasks) {
    let completedClass;
    let checkeAttr;
    if (task.completed === true) {
      completedClass = 'completed';
      checkeAttr = 'checked';
    } else {
      completedClass = '';
      checkeAttr = '';
    }

    listElement.innerHTML += `<li class="${completedClass}">
  <input type="checkbox" ${checkeAttr} class="js-list-check" id="${task}">
  <span>${task.name}</span>
  </li>`;
  }
}

//Listen events
function toggleTask(ev) {
  const clickedId = ev.target.id;
  tasks[clickedId].completed = !tasks[clickedId].completed;
  paintTasks();
  listenEvents();
}

function listenEvents() {
  const checkboxElements = document.querySelectorAll('.js-list-check');
  for (const checkboxElement of checkboxElements) {
    checkboxElement.addEventListener('change', toggleTask);
  }
}

//Start app
paintTasks();
listenEvents();
