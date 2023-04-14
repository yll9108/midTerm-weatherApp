// get users location //
// creating fetch API to make a request //
// when the requested is completed, using DOM to manipulate the user interface //

const apiKey = "c77784ebb91710984ac4bdf2158e585d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

function getUserWeather(latitude, longitude) {
    let userCity = document.getElementById("currentWeatherCity");
    let userTemp = document.getElementById("currentWeatherTemp");
    let userFeel = document.getElementById("currentWeatherFeel");

    async function currentUserLocation() {
        const response = await fetch(
            `${apiUrl}&lat=${latitude}&lon=${longitude}&appid=${apiKey}`
        );
        const currentUserData = await response.json();
        console.log(currentUserData);
        userCity.innerHTML = currentUserData.name;
        userTemp.innerHTML = `Temp: ${currentUserData.main.temp}°C`;
        userFeel.innerHTML = `Feels like: ${currentUserData.main.feels_like}°C`;
    }

    currentUserLocation().catch((error) => {
        console.error(error);
    });
}

function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getUserWeather(latitude, longitude);
}

function errorCallback() {
    console.log("error");
}

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

// fetch current weather API //

window.addEventListener("load", () => {
    // windows會等待html跑完再執行js. //
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
