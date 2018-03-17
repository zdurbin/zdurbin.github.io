//START SPRINGFIELD//
var weatherObjectB = new XMLHttpRequest();
weatherObjectB.open('GET', '//api.wunderground.com/api/4326409d402b76d5/conditions/q/OR/Springfield.json' , true);
weatherObjectB.send();

weatherObjectB.onload = function() {
    var weatherInfoB = JSON.parse(weatherObjectB.responseText);
    console.log(weatherInfoB);
    
    
    document.getElementById('currentTempB').innerHTML = weatherInfoB.current_observation.temp_f;
    document.getElementById('rainB').innerHTML = weatherInfoB.current_observation.precip_1hr_in;
    document.getElementById('windchillB').innerHTML = weatherInfoB.current_observation.windchill_f;
    document.getElementById('speedB').innerHTML = weatherInfoB.current_observation.wind_mph;
    
    var icon_path = weatherInfoB.current_observation.icon_url;
    var urlString = document.location.href;
    console.log(urlString);
    var found = urlString.indexOf("https");
    console.log(found);
    
    if(found>=0){
        icon_path = icon_path.replace("http", "https");
    }
    
    document.getElementById('w_iconB').src = icon_path;
    
}

var forcastObjectB = new XMLHttpRequest();
forcastObjectB.open('GET', '//api.wunderground.com/api/4326409d402b76d5/forecast/q/OR/Springfield.json', true);
forcastObjectB.send();

forcastObjectB.onload = function(){
    var forcastInfoB= JSON.parse(forcastObjectB.responseText);
    console.log(forcastInfoB);
    
    document.getElementById('hiB').innerHTML = forcastInfoB.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('lowB').innerHTML = forcastInfoB.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('conditionsB').innerHTML = forcastInfoB.forecast.simpleforecast.forecastday["0"].conditions;
    document.getElementById('forcastB').innerHTML = forcastInfoB.forecast.txt_forecast.forecastday["0"].fcttext;
    
}