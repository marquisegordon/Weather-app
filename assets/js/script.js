var currentWeather = {
  apiKey: "b7e5799a26a342c63026e8c69fd2a46b",
  fetchWeather: function (currentCity) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" +
        currentCity +
        "&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    var { name } = data;
    var { icon } = data.weather[0];
    var { temp, humidity } = data.main;
    var { speed } = data.wind;
    document.querySelector("#city-name").innerText = name;
    document.querySelector(".icon").src =
      "http://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("#temp").innerText =
      "Temp: " + temp.toFixed(1) + "℉";
    document.querySelector("#wind-speed").innerText =
      "Wind Speed: " + speed.toFixed(1) + " MPH";
    document.querySelector("#humid").innerText = "Humidity: " + humidity + "%";
  },

  search: function () {
    this.fetchWeather(document.querySelector("#search-bar").value);
  },
};

document.querySelector("#searchBtn").addEventListener("click", function () {
  currentWeather.search();
});

var futureWeather = {
  apiKey: "b7e5799a26a342c63026e8c69fd2a46b",
  fetchForecast: function (currentCity) {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=" +
        currentCity +
        "&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayForecast(data));
  },

  displayForecast: function (data) {
    i = 0;
    var { dt_txt } = data.list[i];
    var { icon } = data.list[i].weather[i];
    var { temp, humidity } = data.list[i].main;
    var { speed } = data.list[i].wind;
    for (i = 0; i < 5; i++) {
      document.getElementById("date" + (i + 1)).innerHTML = dt_txt;
    }
    for (i = 0; i < 5; i++) {
      document.getElementById("forecast-icon" + (i + 1)).src =
        "http://openweathermap.org/img/wn/" + icon + ".png";
    }
    for (i = 0; i < 5; i++) {
      document.getElementById("temp" + (i + 1)).innerHTML =
        "Temp: " + temp.toFixed(1) + "℉";
    }
    for (i = 0; i < 5; i++) {
      document.getElementById("forecast-wind" + (i + 1)).innerHTML =
        "Wind Speed: " + speed.toFixed(1) + " MPH";
    }
    for (i = 0; i < 5; i++) {
      document.getElementById("forecast-humid" + (i + 1)).innerHTML =
        "Humidity: " + humidity + "%";
    }
  },

  search: function () {
    this.fetchForecast(document.querySelector("#search-bar").value);
  },
};

document.querySelector("#searchBtn").addEventListener("click", function () {
  futureWeather.search();
});
