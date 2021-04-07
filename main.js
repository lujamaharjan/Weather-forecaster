const submitBtn = document.getElementById("btn-submit");

//after submit button is clicked
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const city = document.getElementById("city").selectedOptions[0].value;
  if (city === "blank") {
    //show error message
    alert("city should not be blank");
  } else {
    // make api call
    makeApiCall(city);
  }
});

const makeApiCall = async (city) => {
  const APIKEY = "127fe15edb19ffcb03369fc571e03ba1";
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
  );
  const weatherData = await response.json();
  displayWeatherData(weatherData);
};

const displayWeatherData = (weatherData) => {
  const weatherImage = document.getElementById("weather-image");
  const temperature = document.getElementById("temperature");
  const weatherCondition = document.getElementById("condition");
  const result = document.querySelector(".result");

  //showing all data for api call
  weatherImage.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  temperature.innerHTML = weatherData.main.temp + " kelvin";
  weatherCondition.innerHTML = weatherData.weather[0].description;
  result.style.display = "flex";
};
