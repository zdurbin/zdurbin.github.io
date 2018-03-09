var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'http://api.wunderground.com/api/4326409d402b76d5/conditions/q/MN/Franklin.json' , true, jsonp);
weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('rain').innerHTML = weatherInfo.current_observation.precip_1hr_in;
    document.getElementById('windchill').innerHTML = weatherInfo.current_observation.windchill_f;
    document.getElementById('speed').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
    
}

var forcastObject = new XMLHttpRequest();
forcastObject.open('GET', 'http://api.wunderground.com/api/4326409d402b76d5/forecast/q/MN/Franklin.json', true, jsonp);
forcastObject.send();

forcastObject.onload = function(){
    var forcastInfo= JSON.parse(forcastObject.responseText);
    console.log(forcastInfo);
    
    document.getElementById('hi').innerHTML = forcastInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('low').innerHTML = forcastInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('conditions').innerHTML = forcastInfo.forecast.simpleforecast.forecastday["0"].conditions;
    document.getElementById('forcast').innerHTML = forcastInfo.forecast.txt_forecast.forecastday["0"].fcttext;
    
}