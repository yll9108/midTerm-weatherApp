// get users location //

// creating fetch API to make a request //

const apiKey = "c77784ebb91710984ac4bdf2158e585d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

// when the requested is completed, using DOM to manipulate the user interface //

function getUserWeather() {
    let userCity = document.getElementById("currentWeatherCity");
    let userTemp = document.getElementById("currentWeatherTemp");
    let userFeel = document.getElementById("currentWeatherFeel");
}

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

function successCallback(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    async function currentUserLocation() {
        const response = await fetch(`${apiUrl}&q=${position}&appid=${apiKey}`);
        const currentUserData = await response.json();
        console.log(currentUserData);
        document.getElementById("currentWeatherCity").innerHTML =
            currentData.name;
        document.getElementById(
            "currentWeatherTemp"
        ).innerHTML = `Temp: ${currentData.main.temp}°C`;
        document.getElementById(
            "currentWeatherFeel"
        ).innerHTML = `Feels like: ${currentData.main.feels_like}°C`;
    }
}

function errorCallback() {
    console.log("error");
}

// navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

getUserWeather();

// fetch current weather API //

window.addEventListener("load", () => {
    // windows會等待html跑完再執行js. //
    const apiKey = "c77784ebb91710984ac4bdf2158e585d";
    const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?units=metric";
    const searchArea = document.querySelector(".searchBar");
    const searchBtn = document.querySelector(".searchBtn");

    async function currentWeather(city) {
        const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
        const currentData = await response.json();
        console.log(currentData);
        document.getElementById("currentWeatherCity").innerHTML =
            currentData.name;
        document.getElementById(
            "currentWeatherTemp"
        ).innerHTML = `Temp: ${currentData.main.temp}°C`;
        document.getElementById(
            "currentWeatherFeel"
        ).innerHTML = `Feels like: ${currentData.main.feels_like}°C`;
    }

    currentWeather("London").catch((error) => {
        // 預設city是Vancouver //
        console.error(error);
    });

    if (searchBtn !== null) {
        searchBtn.addEventListener("click", () => {
            currentWeather(searchArea.value).catch((error) => {
                console.error(error);
            });
        });
    } else {
        console.error("searchBtn is null");
    }
});
