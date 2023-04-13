// Replace YOUR_API_KEY with your actual API key
const API_KEY = '6c94db75f1bc820764764a8c04cca75a';

// Replace YOUR_CITY with the name of your city
const CITY = 'CITY';

const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${'6c94db75f1bc820764764a8c04cca75a'}`;

const forecastContainer = document.getElementById('range');

fetch(URL)
  .then(response => response.json())
  .then(data => {
   
    const forecastData = data.list.filter(forecast => forecast.dt_txt.includes('12:00:00'));

    forecastData.forEach(forecast => {

      const temperature = Math.round(forecast.main.temp - 273.15);
      const time = forecast.dt_txt.split(' ')[1];

      const forecastDiv = document.createElement('div');
      forecastDiv.classList.add('time');
      forecastDiv.innerHTML = `
        <div>${time}</div>
        <div>${temperature}°C</div>
      `;

      forecastContainer.appendChild(forecastDiv);
    });
  })
  .catch(error => {
 
    console.error('An error occurred while fetching the forecast data:', error);
  });
