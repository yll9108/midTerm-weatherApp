const KevinApiKey = "cc736740f255d96b33c502e2115ebb79";
const fiveDaysApiUrl =
    "http://api.openweathermap.org/data/2.5/forecast?units=metric";
const weatherImage1 = document.querySelector("#weatherIcon1");
const weatherImage2 = document.querySelector("#weatherIcon2");
const weatherImage3 = document.querySelector("#weatherIcon3");
const weatherImage4 = document.querySelector("#weatherIcon4");
const weatherImage5 = document.querySelector("#weatherIcon5");
// const searchBar = document.querySelector(".headerBar input");
// const searchBtn = document.querySelector(".headerBar button");

async function fiveDaysForecast(city) {
    const result = await fetch(
        fiveDaysApiUrl + `&q=${city}` + `&appid=${KevinApiKey}`
    );
    let data = await result.json();

    console.log(data);

    document.querySelector("#todayTemperature").innerHTML =
        Math.round(data.list[7].main.temp) + "°C";
    document.querySelector("#tomorrowTemperature").innerHTML =
        Math.round(data.list[15].main.temp) + "°C";
    document.querySelector("#dayThreeTemperature").innerHTML =
        Math.round(data.list[23].main.temp) + "°C";
    document.querySelector("#dayFourTemperature").innerHTML =
        Math.round(data.list[31].main.temp) + "°C";
    document.querySelector("#dayFiveTemperature").innerHTML =
        Math.round(data.list[39].main.temp) + "°C";

    if (data.list[7].weather[0].main == "Clouds") {
        weatherImage2.src = "weather_images/cloud.png";
    } else if (data.list[7].weather[0].main == "Clear") {
        weatherImage2.src = "weather_images/clear.png";
    } else if (data.list[7].weather[0].main == "Rain") {
        weatherImage2.src = "weather_images/raining.png";
    }

    if (data.list[15].weather[0].main == "Clouds") {
        weatherImage3.src = "weather_images/cloud.png";
    } else if (data.list[15].weather[0].main == "Clear") {
        weatherImage3.src = "weather_images/clear.png";
    } else if (data.list[15].weather[0].main == "Rain") {
        weatherImage3.src = "weather_images/raining.png";
    }

    if (data.list[23].weather[0].main == "Clouds") {
        weatherImage4.src = "weather_images/cloud.png";
    } else if (data.list[23].weather[0].main == "Clear") {
        weatherImage4.src = "weather_images/clear.png";
    } else if (data.list[23].weather[0].main == "Rain") {
        weatherImage4.src = "weather_images/raining.png";
    }

    if (data.list[31].weather[0].main == "Clouds") {
        weatherImage5.src = "weather_images/cloud.png";
    } else if (data.list[31].weather[0].main == "Clear") {
        weatherImage5.src = "weather_images/clear.png";
    } else if (data.list[31].weather[0].main == "Rain") {
        weatherImage5.src = "weather_images/raining.png";
    }

    if (data.list[39].weather[0].main == "Clouds") {
        weatherImage1.src = "weather_images/cloud.png";
    } else if (data.list[39].weather[0].main == "Clear") {
        weatherImage1.src = "weather_images/clear.png";
    } else if (data.list[39].weather[0].main == "Rain") {
        weatherImage1.src = "weather_images/raining.png";
    }

    const currentDay = new Date();
    const weekday = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    console.log(currentDay.getDay());

    function date(day) {
        if (day + currentDay.getDay() > 6) {
            return day + currentDay.getDay() - 7;
        } else {
            return day + currentDay.getDay();
        }
    }

    for (let i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1)).innerHTML = weekday[date(i)];
    }
}

fiveDaysForecast("vancouver");

searchBtn.addEventListener("click", () => {
    fiveDaysForecast(searchBar.value);
});
