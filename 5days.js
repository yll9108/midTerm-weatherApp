const apiKey = "8beb5bc835705e20ec03ce8c8ecb088e";
const apiUrl =
    "http://api.openweathermap.org/data/2.5/forecast?lat=49.246292&lon=-123.116226&units=metric";

async function fiveDaysForecast() {
    const result = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await result.json();

    console.log(data);
}

fiveDaysForecast();
