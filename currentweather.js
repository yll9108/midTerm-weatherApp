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
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchArea = document.querySelector(".searchBar");
const searchBtn = document.querySelector(".searchBar + .searchBtn");

async function currentWeather(city) {
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
    const currentData = await response.json();
    console.log(currentData);
    document.getElementById("currentWeatherCity").innerHTML = currentData.name;
    document.getElementById(
        "currentWeatherTemp"
    ).innerHTML = `Temp: ${currentData.main.temp}°C`;
    document.getElementById(
        "currentWeatherFeel"
    ).innerHTML = `Feels like: ${currentData.main.feels_like}°C`;
}

if (searchBtn !== null) {
    searchBtn.addEventListener("click", () => {
        currentWeather(searchArea.value).catch((error) => {
            console.error(error);
        });
    });
} else {
    // console.error("searchBtn is null");
}
