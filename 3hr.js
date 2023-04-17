document.addEventListener("DOMContentLoaded", () => {
    const apikey = "4d697593455ee5751089d0a14f15ecff";
    const apiurl =
        "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

    const searchBar = document.querySelector(".headerBar input");
    const searchBtn = document.querySelector(".headerBar button");
    const conditionIcon = document.querySelector("#condition-icon");
    const condition = document.querySelector("#condition");

    async function forecast(city) {
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        var data = await response.json();

        console.log(data);

        for (let i = 1; i <= 8; i++) {
            document.querySelector(`#time${i}`).innerHTML =
                data.list[i - 1].dt_txt;
            document.querySelector(`#temp${i}`).innerHTML =
                "Temp:" + Math.round(data.list[i - 1].main.temp) + "&deg" + "C";
            document.querySelector(`#feel${i}`).innerHTML =
                "Feels Like:" +
                Math.round(data.list[i - 1].main.feels_like) +
                "&deg" +
                "C";

          if(data.list[i-1].weather[0].main == "Rain" || data.list[i-1].weather[0].description == "light rain"){
            document.querySelector(`#condition-icon${i}`).src = "weather_images/raining.png";
            document.querySelector(`#condition${i}`).innerHTML = "Raining"
          }
          else if(data.list[i-1].weather[0].main == "Snow"){
            document.querySelector(`#condition-icon${i}`).src = "weather_images/snowing.png";
            document.querySelector(`#condition${i}`).innerHTML = "Snowing"
          }
          else if(data.list[i-1].weather[0].main == "Clouds"){
            document.querySelector(`#condition-icon${i}`).src = "weather_images/cloud.png";
            document.querySelector(`#condition${i}`).innerHTML = "Clouds"
          }
          else if(data.list[i-1].weather[0].main == "Clear"){
            document.querySelector(`#condition-icon${i}`).src = "weather_images/sun.png";
            document.querySelector(`#condition${i}`).innerHTML = "Clear"
          }
          else if(data.list[i-1].weather[0].main == "Rain" || data.list[i-1].weather[0].description == "moder"){
            document.querySelector(`#condition-icon${i}`).src = "weather_images/raining.webp";
            document.querySelector(`#condition${i}`).innerHTML = "Moderate Rain"
          }
          
        }
    }

    searchBtn.addEventListener("click", () => {
        forecast(searchBar.value);
    });

    forecast("Vancouver");
});
