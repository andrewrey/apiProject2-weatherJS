// Init weather object
const weather = new Weather('vancouver', 'BC')


// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);


function getWeather(){
  weather.getWeather()
  .then(data => console.log(data))
  .catch(error => console.log(error, 'haha sucker'));
}


  