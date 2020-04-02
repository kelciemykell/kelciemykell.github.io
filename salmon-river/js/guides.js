const apiURL= "guides.json";
fetch(apiURL1)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const weatherAPI = jsObject;

        document.getElementById('name').textContent = guides[0];
        document.getElementById('valHigh').textContent = weatherAPI.main.temp_max.toFixed(1);
        document.getElementById('valHumid').textContent = weatherAPI.main.humidity;
        document.getElementById('valWind').textContent = weatherAPI.wind.speed;

    });