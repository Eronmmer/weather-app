// Initialize all objects
// const storage = new Storage();
const weather = new Weather(localStorage.getItem("city"));
const ui = new UI();

const cityInput = document.getElementById("city-input");
const form = document.getElementById("city-form");

// Change wether report on city change
form.addEventListener("submit", changeCity);

// Default on load
document.addEventListener("DOMContentLoaded", () => {
  if (weather.city === null) {
    localStorage.setItem("city", "Kuje");
    weather.changeLocation(localStorage.getItem("city"));
  }

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
  localStorage.setItem( "city", cityInput.value );
  displayWeather();
  console.log(cityInput.value);
  cityInput.value = "";
  e.preventDefault();
}
