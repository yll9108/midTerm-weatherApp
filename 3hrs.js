window.addEventListener("load", () => {
  const CITY = 'Vancouver';
  const Apikey = "6c94db75f1bc820764764a8c04cca75a";
  const Apiurl = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${Apikey}`;
  const forecastContainer = document.querySelector('.range');

  async function getForecastWeather(city) {
    try {
      const response = await fetch(Apiurl);
      const data = await response.json();
  
      const currentTime = new Date().getTime() / 1000;
      const twentyFourHoursLater = currentTime + (24 * 60 * 60);
      const forecastData = data.list.filter(forecast => {
        const forecastTime = new Date(forecast.dt_txt).getTime() / 1000;
        return forecastTime > currentTime && forecastTime <= twentyFourHoursLater && forecastTime % (3 * 60 * 60) === 0;
      });
  
      forecastData.forEach((forecast, index) => {
        const temperature = Math.round(forecast.main.temp - 273.15);
        const time = forecast.dt_txt.split(' ')[1];
  
        const forecastDiv = forecastContainer.children[index];
        const timeElem = forecastDiv.querySelector(`#time${index+1}`);
        const tempElem = forecastDiv.querySelector(`#temp${index+1}`);
        const feelElem = forecastDiv.querySelector(`#feel${index+1}`);
  
        timeElem.textContent = time;
        tempElem.textContent = `${temperature}°C`;
        feelElem.textContent = `Feels like ${Math.round(forecast.main.feels_like - 273.15)}°C`;
      });
    } catch (error) {
      console.error('An error occurred while fetching the forecast data:', error);
    }
  }

  getCurrentWeather(CITY);
  getForecastWeather(CITY);
});
