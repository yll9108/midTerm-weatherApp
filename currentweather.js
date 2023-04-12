// get users location //
// const successCallback = (position) => {
//     console.log(position);
// };

// const errorCallback = (error) => {
//     console.log(error);
// };

// navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

// fetch current weather API //

const apiKey = "c77784ebb91710984ac4bdf2158e585d";
const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=49.246292&lon=-123.116226&units=metric";

async function currentWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let currentData = await response.json();
    console.log(currentData);
    document.getElementById("currentWeatherCity").innerHTML = currentData.name;
    document.getElementById("currentWeatherTemp").innerHTML =
        "Temp : " + currentData.main.temp + "°C ";
    document.getElementById("currentWeatherFeel").innerHTML =
        "Feels like .. " + currentData.main.feels_like + "°C ";
}

currentWeather();
