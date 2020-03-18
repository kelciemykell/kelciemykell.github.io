
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const apiURL1 = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=ff101de3d4d514d1df9ef8df578576ab&units=imperial";
fetch(apiURL1)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const currentWeather = jsObject;
        let current = document.createElement('p');
        let temperature = document.createElement('p');
        let wind_speed = document.createElement('p');
        let wind_chill = document.createElement('p');
        let humidity = document.createElement('p');


        current.textContent = currentWeather.weather[0].main;
        temperature.textContent = currentWeather.main.temp_max.toFixed(0) + "°F";
        wind_speed.textContent = currentWeather.wind.speed + "mph";;
        wind_chill.textContent = calculateWindChill(currentWeather.main.temp_max, currentWeather.wind.speed);
        humidity.textContent = currentWeather.main.humidity + "°%";;

        document.querySelector('section.herosec').appendChild(current);
        document.querySelector('section.herosec').appendChild(temperature);
        document.querySelector('section.herosec').appendChild(wind_chill);
        document.querySelector('section.herosec').appendChild(wind_speed);
        document.querySelector('section.herosec').appendChild(humidity);
    });
    const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ff101de3d4d514d1df9ef8df578576ab&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        var today = new Date();
        const forecast = jsObject['list'];
        var count = 0;
        for (let i = 0; i < forecast.length; i++) {
            var hour = new Date(forecast[i].dt_txt).getHours();
            var day = new Date(forecreateElementcast[i].dt_txt).getDay();
            if (hour == 18) {
                let col = document.createElement('div');
                col.setAttribute("class", "col");
                let span = document.createElement('span');
                span.setAttribute("class", "label");
                let data = document.('span');
                data.setAttribute("class", "data");
                let img = document.createElement('img');
                img.setAttribute('src', 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png');
                img.setAttribute('alt', forecast[i].weather[0].description);


                span.textContent = days[day];
                data.textContent = forecast[i].main.temp.toFixed(0) + "°F";
                col.appendChild(span);
                col.appendChild(img);
                col.appendChild(data);
                document.querySelector('forecastDiv').appendChild(col);
            }
        }
    });
    