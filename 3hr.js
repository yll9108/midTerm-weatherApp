document.addEventListener("DOMContentLoaded", () => {
  const apikey ="4d697593455ee5751089d0a14f15ecff";
  const apiurl ="https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

  const searchBar = document.querySelector(".headerBar input");
  const searchBtn = document.querySelector(".headerBar button");

  async function forecast(city){
      const response = await fetch(apiurl + city + `&appid=${apikey}`);
      var data = await response.json();

      console.log(data);

      for (let i = 1; i <= 8; i++) {
          document.querySelector(`#time${i}`).innerHTML = data.list[i-1].dt_txt;
          document.querySelector(`#temp${i}`).innerHTML = "Temp:" + Math.round(data.list[i-1].main.temp) + "&deg" + "C";
          document.querySelector(`#feel${i}`).innerHTML = "Feels Like:" + Math.round(data.list[i-1].main.feels_like) + "&deg" + "C";
        }
        
  }

  searchBtn.addEventListener("click", ()=>{
    forecast(searchBar.value);
  })

  forecast("Vancouver");
});
