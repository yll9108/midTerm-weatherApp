const KevinApiKey = "8beb5bc835705e20ec03ce8c8ecb088e";
const fiveDaysApiUrl =
    "http://api.openweathermap.org/data/2.5/forecast?lat=49.246292&lon=-123.116226&units=metric";
const weatherImage = document.querySelector(".weatherIcon");

async function todayForecast() {
    const result = await fetch(fiveDaysApiUrl + `&appid=${KevinApiKey}`);
    let data = await result.json();

    console.log(data);

    if (data.list[0].weather[0].main == "Clouds") {
        weatherImage.src = "images/cloud.png";
    } else if (data.list[0].weather[0].main == "Clear") {
        weatherImage.src = "images/sun.png";
    } else if (data.list[0].weather[0].main == "Rain") {
        weatherImage.src = "images/raining.png";
    }

    document.getElementById("todayTemperature").innerHTML =
        Math.round(data.list[0].main.temp) + "°C";
}

async function tomorrowForecast() {
    const result = await fetch(fiveDaysApiUrl + `&appid=${KevinApiKey}`);
    let data = await result.json();

    if (data.list[8].weather[0].main == "Clouds") {
        weatherImage.src = "images/cloud.png";
    } else if (data.list[8].weather[0].main == "Clear") {
        weatherImage.src = "images/sun.png";
    } else if (data.list[8].weather[0].main == "Rain") {
        weatherImage.src = "images/raining.png";
    }

    document.getElementById("tomorrowTemperature").innerHTML =
        Math.round(data.list[8].main.temp) + "°C";
}

async function dayThreeForecast() {
    const result = await fetch(fiveDaysApiUrl + `&appid=${KevinApiKey}`);
    let data = await result.json();

    if (data.list[16].weather[0].main == "Clouds") {
        weatherImage.src = "images/cloud.png";
    } else if (data.list[16].weather[0].main == "Clear") {
        weatherImage.src = "images/sun.png";
    } else if (data.list[16].weather[0].main == "Rain") {
        weatherImage.src = "images/raining.png";
    }

    document.getElementById("dayThreeTemperature").innerHTML =
        Math.round(data.list[16].main.temp) + "°C";
}

async function dayFourForecast() {
    const result = await fetch(fiveDaysApiUrl + `&appid=${KevinApiKey}`);
    let data = await result.json();

    if (data.list[24].weather[0].main == "Clouds") {
        weatherImage.src = "images/cloud.png";
    } else if (data.list[24].weather[0].main == "Clear") {
        weatherImage.src = "images/sun.png";
    } else if (data.list[24].weather[0].main == "Rain") {
        weatherImage.src = "images/raining.png";
    }

    document.getElementById("dayFourTemperature").innerHTML =
        Math.round(data.list[24].main.temp) + "°C";
}

async function dayFiveForecast() {
    const result = await fetch(fiveDaysApiUrl + `&appid=${KevinApiKey}`);
    let data = await result.json();

    if (data.list[32].weather[0].main == "Clouds") {
        weatherImage.src = "images/cloud.png";
    } else if (data.list[32].weather[0].main == "Clear") {
        weatherImage.src = "images/sun.png";
    } else if (data.list[32].weather[0].main == "Rain") {
        weatherImage.src = "images/raining.png";
    }

    document.getElementById("dayFiveTemperature").innerHTML =
        Math.round(data.list[32].main.temp) + "°C";
}

todayForecast();
tomorrowForecast();
dayThreeForecast();
dayFourForecast();
dayFiveForecast();
