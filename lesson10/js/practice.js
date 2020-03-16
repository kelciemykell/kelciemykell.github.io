const apiURL1 = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=ff101de3d4d514d1df9ef8df578576ab&units=imperial";

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

//-----------5 day

function weatherSummary() {
    const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ff101de3d4d514d1df9ef8df578576ab&units=imperial";
    fetch(apiURL)
        .then(function (response) {
            return response.json();
        })
    const forecast = jsObject.list;

    const currentDay = new Date().getDay();
    const weekday = [];
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    let count = currentDay;
    for (let i = 0; i < forecast.length; i++) {
        if (forecast[i].dt_txt.includes("18:00:00")) {
            if (count == 7) {
                count = 0;
            }
            let h4 = document.createElement('h4');
            let div = document.createElement('div');
            let image = document.createElement('img');
            let p = document.createElement('p');

            h4.textContent = weekday[count];
            div.appendChild(h4);

            let icon = forecast[i].weather[0].icon;
            image.setAttribute('src', 'https://openweathermap.org/img/w/' + icon + '.png');
            image.setAttribute('alt', forecast[i].weather[0].description);
            div.appendChild(image);

            p.textContent = forecast[i].main.temp.toFixed(0) + ' F';
            div.appendChild(p);

            document.querySelector('div.forecastDiv').appendChild(div);
            count++;
        }
    }
};