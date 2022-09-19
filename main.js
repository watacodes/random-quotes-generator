const generateButton = document.querySelector('.generateButton');
const API_URL = 'http://api.forismatic.com/api/1.0/.';
generateButton.addEventListener('click', getAPI)

function getAPI () {
  fetch('https://api.forismatic.com/api/1.0/')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}