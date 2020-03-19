const apiURL1 = "//api.openweathermap.org/data/2.5/weather?id=5585000&appid=ff101de3d4d514d1df9ef8df578576ab&units=imperial";

fetch(apiURL1)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const weatherAPI = jsObject;

        document.getElementById('valCurrent').textContent = weatherAPI.weather[0].main;
        document.getElementById('valHigh').textContent = weatherAPI.main.temp_max.toFixed(1);
        document.getElementById('valHumid').textContent = weatherAPI.main.humidity;
        document.getElementById('valWind').textContent = weatherAPI.wind.speed;

    });
