'use stric';

const btn = document.querySelector('.js-button');

function getGithubUser() {
  const inputValue = document.querySelector('.text').value;
  fetch('https://api.github.com/users/' + inputValue)
    .then((response) => response.json())
    .then((data) => {
      const user = document.querySelector('.user');
      user.innerHTML = data.login;
      const img = document.querySelector('img');
      img.src = data.avatar_url;
      img.alt = 'Que guapa!';
      const repos = document.querySelector('.repos');
      repos.innerHTML = data.public_repos;
    });
}

btn.addEventListener('click', getGithubUser);
