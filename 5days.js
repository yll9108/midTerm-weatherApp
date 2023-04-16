const KevinApiKey = "8beb5bc835705e20ec03ce8c8ecb088e";
const fiveDaysApiUrl =
    "http://api.openweathermap.org/data/2.5/forecast?units=metric";
const weatherImage = document.querySelector(".weatherIcon");
const searchBar = document.querySelector(".headerBar input");
const searchBtn = document.querySelector(".headerBar button");

// async function todayForecast(city) {
//     const result = await fetch(
//         fiveDaysApiUrl + `&q=${city}` + `&appid=${KevinApiKey}`
//     );
//     let data = await result.json();

//     console.log(data);

//     if (data.list[0].weather[0].main == "Clouds") {
//         weatherImage.src = "images/cloud.png";
//     } else if (data.list[0].weather[0].main == "Clear") {
//         weatherImage.src = "images/sun.png";
//     } else if (data.list[0].weather[0].main == "Rain") {
//         weatherImage.src = "images/raining.png";
//     }

//     document.getElementById("todayTemperature").innerHTML =
//         Math.round(data.list[0].main.temp) + "°C";
// }

// async function tomorrowForecast() {
//     const result = await fetch(
//         fiveDaysApiUrl + `&q=${city}` + `&appid=${KevinApiKey}`
//     );
//     let data = await result.json();

//     if (data.list[8].weather[0].main == "Clouds") {
//         weatherImage.src = "images/cloud.png";
//     } else if (data.list[8].weather[0].main == "Clear") {
//         weatherImage.src = "images/sun.png";
//     } else if (data.list[8].weather[0].main == "Rain") {
//         weatherImage.src = "images/raining.png";
//     }

//     document.getElementById("tomorrowTemperature").innerHTML =
//         Math.round(data.list[8].main.temp) + "°C";
// }

// async function dayThreeForecast() {
//     const result = await fetch(
//         fiveDaysApiUrl + `&q=${city}` + `&appid=${KevinApiKey}`
//     );
//     let data = await result.json();

//     if (data.list[16].weather[0].main == "Clouds") {
//         weatherImage.src = "images/cloud.png";
//     } else if (data.list[16].weather[0].main == "Clear") {
//         weatherImage.src = "images/sun.png";
//     } else if (data.list[16].weather[0].main == "Rain") {
//         weatherImage.src = "images/raining.png";
//     }

//     document.getElementById("dayThreeTemperature").innerHTML =
//         Math.round(data.list[16].main.temp) + "°C";
// }

// async function dayFourForecast() {
//     const result = await fetch(
//         fiveDaysApiUrl + `&q=${city}` + `&appid=${KevinApiKey}`
//     );
//     let data = await result.json();

//     if (data.list[24].weather[0].main == "Clouds") {
//         weatherImage.src = "images/cloud.png";
//     } else if (data.list[24].weather[0].main == "Clear") {
//         weatherImage.src = "images/sun.png";
//     } else if (data.list[24].weather[0].main == "Rain") {
//         weatherImage.src = "images/raining.png";
//     }

//     document.getElementById("dayFourTemperature").innerHTML =
//         Math.round(data.list[24].main.temp) + "°C";
// }

// async function dayFiveForecast() {
//     const result = await fetch(
//         fiveDaysApiUrl + `&q=${city}` + `&appid=${KevinApiKey}`
//     );
//     let data = await result.json();

//     if (data.list[32].weather[0].main == "Clouds") {
//         weatherImage.src = "images/cloud.png";
//     } else if (data.list[32].weather[0].main == "Clear") {
//         weatherImage.src = "images/sun.png";
//     } else if (data.list[32].weather[0].main == "Rain") {
//         weatherImage.src = "images/raining.png";
//     }

//     document.getElementById("dayFiveTemperature").innerHTML =
//         Math.round(data.list[32].main.temp) + "°C";
// }

// todayForecast("vancouver");
// tomorrowForecast("vancouver");
// dayThreeForecast("vancouver");
// dayFourForecast("vancouver");
// dayFiveForecast("vancouver");

// searchBtn.addEventListener("click", () => {
//     todayForecast(searchBar.value);
//     tomorrowForecast(searchBar.value);
//     dayThreeForecast(searchBar.value);
//     dayFourForecast(searchBar.value);
//     dayFiveForecast(searchBar.value);
// });

async function fiveDaysForecast(city) {
    const result = await fetch(
        fiveDaysApiUrl + `&q=${city}` + `&appid=${KevinApiKey}`
    );
    let data = await result.json();

    console.log(data);

    for (let i = 0; i <= 32; i += 8) {
        document.getElementById("dayFiveTemperature").innerHTML =
            Math.round(data.list[i].main.temp) + "°C";

        if (data.list[i].weather[0].main == "Clouds") {
            weatherImage.src = "images/cloud.png";
        } else if (data.list[i].weather[0].main == "Clear") {
            weatherImage.src = "images/sun.png";
        } else if (data.list[i].weather[0].main == "Rain") {
            weatherImage.src = "images/raining.png";
        }
    }
}

fiveDaysForecast("vancouver");

searchBtn.addEventListener("click", () => {
    fiveDaysForecast(searchBar.value);
});
