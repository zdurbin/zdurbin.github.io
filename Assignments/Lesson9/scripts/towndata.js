var townObject = new XMLHttpRequest();
townObject.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json' , true);
townObject.send();

townObject.onload = function() {
    var townInfo = JSON.parse(townObject.responseText);
    console.log(townInfo);
    
    document.getElementById('motto').innerHTML = townInfo.current_observation.temp_f;
    document.getElementById('').innerHTML = townInfo.current_observation.precip_1hr_in;
    document.getElementById('').innerHTML = townInfo.current_observation.windchill_f;
    document.getElementById('').innerHTML = townInfo.current_observation.wind_mph;
    document.getElementById('').src = townInfo.current_observation.icon_url;
    
}

/*var forcastObject = new XMLHttpRequest();
forcastObject.open('GET', 'http://api.wunderground.com/api/4326409d402b76d5/forecast/q/MN/Franklin.json', true);
forcastObject.send();

forcastObject.onload = function(){
    var forcastInfo= JSON.parse(forcastObject.responseText);
    console.log(forcastInfo);
    
    document.getElementById('hi').innerHTML = forcastInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('low').innerHTML = forcastInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('conditions').innerHTML = forcastInfo.forecast.simpleforecast.forecastday["0"].conditions;
    document.getElementById('forcast').innerHTML = forcastInfo.forecast.txt_forecast.forecastday["0"].fcttext;
    
} */