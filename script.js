const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const temprature = document.querySelector(".temprature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");

async function checkWeather(city) {
  const api_key = "60a75c6eb4d4e1697953ef46bf9e1140";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${URL}`).then((responce) =>
    responce.json()
  );
  if (weather_data.cod === `404 `) {
    console.log("error",weather_data);
    return;
  }

  console.log(weather_data);
  temprature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  description.innerHTML = `${weather_data.weather[0].description}`;
  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

  switch (weather_data.weather[0].main) {
    case "Clouds":
      weather_img.src = "assets/cloud.png";
      break;
    case "Clear":
      weather_img.src = "assets/clear.png";
      break;
    case "Mist":
      weather_img.src = "assets/mist.png";
      break;
    case "Rain":
      weather_img.src = "assets/rain.png";
      break;
    case "Snow":
      weather_img.src = "assets/snow.png";
      break;
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
