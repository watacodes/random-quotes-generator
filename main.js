const generateButton = document.querySelector('.generateButton');
const placeholder = document.querySelector('.content'); 
const API_URL = 'https://api.adviceslip.com/advice'
generateButton.addEventListener('click', getAPI)

function getAPI () {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      console.log(data.slip.advice)
      placeholder.textContent = data.slip.advice;
    })
    .catch(err => {
      console.log(err)
    });
}