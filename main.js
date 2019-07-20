// Initialize all objects
const weather = new Weather( "Kuje" );
const ui = new UI();

const cityInput = document.getElementById("city-input");
const form = document.getElementById("city-form");

// Change wether report on city change
form.addEventListener("submit", changeCity);

// Default on load
document.addEventListener("DOMContentLoaded", () => {
  displayWeather();
});

function displayWeather() {
  weather
    .getWeather()
    .then(result => {
      // paint the ui with the result
      ui.displayValues(result);
      console.log(result);
    })
    .catch(err => console.log(err));
}

function changeCity(e) {
  weather.changeLocation(cityInput.value);
  document.getElementById("location").textContent = `Current Weather in ${
    cityInput.value
  }`;
  displayWeather();
  console.log(cityInput.value);
  cityInput.value = "";
  e.preventDefault();
}
