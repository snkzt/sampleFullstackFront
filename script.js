const textInput = document.getElementById('city');

let cityName = textInput.value;
textInput.addEventListener('input', function(e) {
  cityName = e.target.value;
})

const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  api();
  textInput.value = '';
});

let city = document.querySelector('.cityName');
let celsius = document.querySelector('.celsius');
let fahrenheit = document.querySelector('.fahrenheit');
let errorMessage = document.querySelector('.error-message');

async function api() {
  await fetch(`http://localhost:3000/weather/?city=${cityName}`)
  .then(response => response.json())
  .then(function(data) {
    if (data.city) {
      city.innerHTML = `City: ${data.city}`;
      celsius.innerHTML = `Temperature (C): ${data['temperature (C)']}`;
      fahrenheit.innerHTML = `Temperature (F): ${data['temperature (F)']}`;
    } else {
      errorMessage.innerHTML = 'This city is not in our database'
    }
  })
  .catch(function(error) {
    console.log(error);
  })
}