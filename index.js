//First - Way;
let cityData = {
  tehran: {
    city: "Tehran",
    temp: 12,
    description: "sunny",
    humidity: 32,
    wind: 32,
  },
  ardabi: {
    city: "Ardabil",
    temp: -3,
    description: "snowy",
    humidity: 32,
    wind: 32,
  },
  shraz: {
    city: "Shiraz",
    temp: 10,
    description: "cloudy",
    humidity: 32,
    wind: 32,
  },
  ahvaz: {
    city: "Ahvaz",
    temp: 42,
    description: "sunny",
    humidity: 32,
    wind: 32,
  },
};

let $ = document;
let searchBar = $.querySelector(".search-bar");
let searchBtn = $.getElementById("search");

searchBtn.addEventListener("click", function () {
  let allCityData = cityData[searchBar.value];
  console.log(allCityData);

  if (allCityData) {
    $.querySelector(".city").innerHTML = "Weather in " + allCityData.city;
    $.querySelector(".temp").innerHTML = allCityData.temp + "0C";
    $.querySelector(".description").innerHTML = allCityData.description;
    $.querySelector(".humidity").innerHTML =
      "Humidity: " + allCityData.humidity;
    $.querySelector(".wind").innerHTML = "Windspeed: " + allCityData.wind;
    $.querySelector(".weather").classList.remove("loading");
  } else {
    alert("شهر مورد نظر را به درستی وارد نمایید");
  }
});

//Second-way

// let cityData = [
//   {
//     city: "tehran",
//     temp: 12,
//     description: "sunny",
//     humidity: 32,
//     wind: 32,
//   },
//   {
//     city: "ardabil",
//     temp: -3,
//     description: "snowy",
//     humidity: 32,
//     wind: 32,
//   },
//   {
//     city: "shiraz",
//     temp: 10,
//     description: "cloudy",
//     humidity: 32,
//     wind: 32,
//   },
//   {
//     city: "ahvaz",
//     temp: 42,
//     description: "sunny",
//     humidity: 32,
//     wind: 32,
//   },
// ];

// let $ = document;
// let searchBar = $.querySelector(".search-bar");
// let searchBtn = $.getElementById("search");

// searchBtn.addEventListener("click", function () {
//   let allCityData = cityData.find(function (item) {
//     return item.city === searchBar.value;
//   });
//   if (allCityData) {
//     $.querySelector(".city").innerHTML = "Weather in " + allCityData.city;
//     $.querySelector(".temp").innerHTML = allCityData.temp + "0C";
//     $.querySelector(".description").innerHTML = allCityData.description;
//     $.querySelector(".humidity").innerHTML =
//       "Humidity: " + allCityData.humidity;
//     $.querySelector(".wind").innerHTML = "Windspeed: " + allCityData.wind;
//     $.querySelector(".weather").classList.remove("loading");
//   } else {
//     alert("شهر مورد نظر را به درستی وارد نمایید");
//   }
// });
