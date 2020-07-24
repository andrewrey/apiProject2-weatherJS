// Init weather object
const weather = new Weather('vancouver', 'BC')

// Init UI Object
const ui = new UI()

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);


function getWeather(){
  weather.getWeather()
  .then(data => ui.paint(data))
  .catch(error => console.log(error, 'haha sucker'));
}


  