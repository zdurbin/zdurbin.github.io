//START GREENVILLE//
var weatherObjectA = new XMLHttpRequest();
weatherObjectA.open('GET', '//api.wunderground.com/api/4326409d402b76d5/conditions/q/TX/Greenville.json', true);
weatherObjectA.send();

weatherObjectA.onload = function () {
    var weatherInfoA = JSON.parse(weatherObjectA.responseText);
    console.log(weatherInfoA);

    document.getElementById('currentTempA').innerHTML = weatherInfoA.current_observation.temp_f;
    document.getElementById('rainA').innerHTML = weatherInfoA.current_observation.precip_1hr_in;
    document.getElementById('windchillA').innerHTML = weatherInfoA.current_observation.windchill_f;
    document.getElementById('speedA').innerHTML = weatherInfoA.current_observation.wind_mph;

    var icon_path = weatherInfoA.current_observation.icon_url;
    var urlString = document.location.href;
    console.log(urlString);
    var found = urlString.indexOf("https");
    console.log(found);

    if (found >= 0) {
        icon_path = icon_path.replace("http", "https");
    }

    document.getElementById('w_iconA').src = icon_path;

}

var forcastObjectA = new XMLHttpRequest();
forcastObjectA.open('GET', '//api.wunderground.com/api/4326409d402b76d5/forecast/q/TX/Greenville.json', true);
forcastObjectA.send();

forcastObjectA.onload = function () {
    var forcastInfoA = JSON.parse(forcastObjectA.responseText);
    console.log(forcastInfoA);

    document.getElementById('hiA').innerHTML = forcastInfoA.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('lowA').innerHTML = forcastInfoA.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('conditionsA').innerHTML = forcastInfoA.forecast.simpleforecast.forecastday["0"].conditions;
    document.getElementById('forcastA').innerHTML = forcastInfoA.forecast.txt_forecast.forecastday["0"].fcttext;

}
//END GREENVILLE//