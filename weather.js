class Weather {
  constructor(city) {
    this.key = "f26c0371c9b2e8beb2744c9346e6b545";
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/find?q=${this.city}&appid=${
        this.key
      }&units=metric`
    );

    const responseData = await response.json();

    return responseData.list[0];
  }

  // Change location
  changeLocation(city) {
    this.city = city;
  }
}
