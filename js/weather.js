class Weather{
  constructor(city, state){
    this.apiKey = weatherKey.myKey;
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }


  // Change Weather Location
  changeLocation(city, state){
    this.city = city;
    this.state = state;
  }
}