'use stric';

const btn = document.querySelector('.js-btn');
const lista = document.querySelector('ul');

function reposOrganization() {
  const inputValue = document.querySelector('.js-text').value;
  fetch('https://api.github.com/orgs/' + inputValue)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      fetch(data.repos_url)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          for (let dat of data) {
            lista.innerHTML += `<li>${dat.name}</li>`
          }
        });
    });
}

btn.addEventListener('click', reposOrganization)