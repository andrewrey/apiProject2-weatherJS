// Init storage
const storage = new Storage();

// Get Stored Location data
const weatherLocation = storage.getLocationData()

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state)

// Init UI Object
const ui = new UI()

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change Location
  weather.changeLocation(city, state);
  // Set location in LS
  storage.setLocationData(city, state);

  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');

});




function getWeather(){
  weather.getWeather()
  .then(data => ui.paint(data))
  .catch(error => console.log(error, 'haha sucker'));
}


  