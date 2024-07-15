const apiKey = '5c47549bd7694aec3e3283c0828a4c98'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric'

async function checkWeather(city) {
  const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`)
  let data = await response.json();
  console.log(data);

  const weatherIconCode = data.weather[0].icon;
  const weatherIconUrl = 'https://openweathermap.org/img/wn/' + weatherIconCode + '@2x.png'
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
  document.querySelector(".weather-status").innerHTML = data.weather[0].description;

  console.log(weatherIconCode);

  document.querySelector(".weather-icon").src = weatherIconUrl;

  document.querySelector(".weather").style.display = "block";

}

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');


searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);

})



