// get users location //
// creating fetch API to make a request //
// when the requested is completed, using DOM to manipulate the user interface //

const apiYenKey = "c77784ebb91710984ac4bdf2158e585d";
const apiYenUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric";

function initMap() {
    function getUserWeather(latitude, longitude) {
        let userCity = document.getElementById("currentWeatherCity");
        let userTemp = document.getElementById("currentWeatherTemp");
        let userFeel = document.getElementById("currentWeatherFeel");

        async function currentUserLocation() {
            const response = await fetch(
                `${apiYenUrl}&lat=${latitude}&lon=${longitude}&appid=${apiYenKey}`
            );
            const currentUserData = await response.json();
            console.log(currentUserData);
            userCity.innerHTML = currentUserData.name;
            userTemp.innerHTML = `Temp: ${Math.round(
                currentUserData.main.temp
            )}°C`;
            userFeel.innerHTML = `Feels like: ${Math.round(
                currentUserData.main.feels_like
            )}°C`;
        }

        currentUserLocation();

        // currentUserLocation().catch((error) => {
        //     console.error(error);
        // });
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

    const searchArea = document.querySelector("#searchBar");
    const searchBtn = document.querySelector("#searchBtn");

    async function currentWeather(city) {
        const response = await fetch(
            `${apiYenUrl}&q=${city}&appid=${apiYenKey}`
        );
        const currentData = await response.json();
        console.log(currentData);
        document.getElementById("currentWeatherCity").innerHTML =
            currentData.name;
        document.getElementById(
            "currentWeatherTemp"
        ).innerHTML = `Temp: ${Math.round(currentData.main.temp)}°C`;
        document.getElementById(
            "currentWeatherFeel"
        ).innerHTML = `Feels like: ${Math.round(
            currentData.main.feels_like
        )}°C`;
    }

    currentWeather("Vancouver");
    // currentWeather("Vancouver").catch((error) => {
    //     console.error(error);
    // });

    if (searchBtn !== null) {
        searchBtn.addEventListener("click", () => {
            currentWeather(searchArea.value).catch((error) => {
                console.error(error);
            });
        });
    } else {
        console.error("searchBtn is null");
    }

    const options = {
        types: ["(cities)"],
        componentRestrictions: { country: "ca" },
    };
    const input = document.getElementById("searchBar");
    // 定義input,裡面存放searchBar的資料
    const autocomplete = new google.maps.places.Autocomplete(input, options);
    // 定義autocomplete, 裡面存放
    // autocomplete.addListener("place_changed", () => {
    //     autocomplete.getPlace();
    // });
}

// add to the favorite list //
// click the star to change color (if.. else if) or onclick//
// adding city to the list (by local storage)//

// const favoriteCities = document.querySelector("favoriteCities");
// const addFavorite = ( // what are you going to take? // )=> {
// }

// function (save){
//     const favoriteCities = document.querySelector("favoriteCities").value;

//     if(localStorage.getItem() == null){
//         localStorage.setItem('cityData', []);
//     }

//     const nonFavorite = JSON.parse(localStorage.getItem('cityData'));
//     nonFavorite.push(favoriteCities);

//     localStorage.setItem('cityData', JSON.stringify(nonFavorite));

//     star.addEventListener("click", () => {
//         document.getElementById("star").innerHTML = (
//             <i class="fa-regular fa-star"></i>
//         );
//     });
