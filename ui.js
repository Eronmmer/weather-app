class UI {
  constructor() {
    this.location = document.getElementById("location");
    this.description = document.getElementById("description");
    this.temperature = document.getElementById("temperature");
    this.humidity = document.getElementById("humidity");
    this.pressure = document.getElementById("pressure");
    this.windSpeed = document.getElementById("wind-speed");
  }

  displayValues(weather) {
    this.location.textContent = `Current weather in ${weather.name}`;
    this.description.textContent = `Weather Condition: ${weather.weather[0].description}`;
    this.temperature.textContent = `Current Temperature: ${weather.main.temp} deg celsius`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure}hPa`;
    this.windSpeed.textContent = `Wind Speed: ${weather.wind.speed}m/s`;
  }
}
