window.addEventListener("load", () => {
const apiKey = "c77784ebb91710984ac4bdf2158e585d";
    const apiUrl =
    `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}`;;

const CITY = 'Vancouver';

const forecastContainer = document.querySelector('.range');

const currentTemp = document.querySelector('#temp1');

const feelsLikeTemp = document.querySelector('#feel1');
async function currentWeather(city) {
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
    const currentData = await response.json();
    console.log(currentData);
    document.getElementById("currentWeatherCity").innerHTML =
        currentData.name;
    document.getElementById(
        "temp1"
    ).innerHTML = `Temp: ${currentData.main.temp}°C`;
    document.getElementById(
        "feel1"
    ).innerHTML = `Feels like: ${currentData.main.feels_like}°C`;
}


fetch(URL)
  .then(response => response.json())
  .then(data => {
    
    const forecastData = data.list.filter(forecast => forecast.dt_txt.includes('12:00:00') || forecast.dt_txt.includes('15:00:00') || forecast.dt_txt.includes('18:00:00') || forecast.dt_txt.includes('21:00:00') || forecast.dt_txt.includes('00:00:00') || forecast.dt_txt.includes('03:00:00') || forecast.dt_txt.includes('06:00:00') || forecast.dt_txt.includes('09:00:00'));

    const currentTemperature = Math.round(forecastData[0].main.temp - 273.15);
    const feelsLikeTemperature = Math.round(forecastData[0].main.feels_like - 273.15);

    currentTemp.textContent = `${currentTemperature}°C`;
    feelsLikeTemp.textContent = `Feels like ${feelsLikeTemperature}°C`;

    forecastData.forEach((forecast, index) => {
   
      const temperature = Math.round(forecast.main.temp - 273.15);
      const time = forecast.dt_txt.split(' ')[1];

      const forecastDiv = forecastContainer.children[index];
      forecastDiv.innerHTML = `
        <div>${time}</div>
        <div>${temperature}°C</div>
      `;
    });
  })
  .catch(error => {

    console.error('An error occurred while fetching the forecast data:', error);
  });
});
