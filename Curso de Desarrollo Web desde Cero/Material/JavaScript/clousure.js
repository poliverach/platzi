var geolocation = (function() {
  var API_WEATHER_KEY = '80114c7878f599621184a687fc500a12';
  var API_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=' + API_WEATHER_KEY;
  var API_WEATHER_IMG_URL = 'http://openweathermap.org/img/w/';

  var cityWeather = {};
  cityWeather.zone;
  cityWeather.icon;
  cityWeather.temp;
  cityWeather.temp_max;
  cityWeather.temp_min;
  cityWeather.main;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCoords, errorFound);
  }
  else {
    alert("Por favor, actualiza tu navegador");
  }

  function errorFound(error) {
    alert("Un error ocurrio" + error.code);
  }

  function getCoords(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    $.getJSON(API_WEATHER_URL + 'lat=' + '&lon=' + lon, getCurrentWeather);
  }

  function convertKelvinToCelsius(temp) {
    return temp - 273.15;
  }

  function getCurrentWeather(data) {
    cityWeather.zone = data.name;
    cityWeather.icon = API_WEATHER_IMG_URL + data.weather[0].icon + '.png';
    cityWeather.temp = convertKelvinToCelsius(data.main.temp);
    cityWeather.temp_max = convertKelvinToCelsius(data.main.temp_max);
    cityWeather.temp_min = convertKelvinToCelsius(data.main.temp_min);
    cityWeather.main = data.weather[0].main;
  }
})();


var contador = (function() {
  var _contador = 0;

  function cambiarValor(valor) {
    return _contador += valor;
  }

  return {
    incrementar: function() {
      cambiarValor(1);
    },
    decrementar: function() {
      cambiarValor(-1);
    },
    valor: function() {
      return _contador;
    }
  }
})();


contador.incrementar();
contador.valor();
