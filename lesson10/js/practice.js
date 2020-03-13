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

  const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ff101de3d4d514d1df9ef8df578576ab&units=imperial";

  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(fivedayforecast);

    for (let i=0; i<=fivedayforecast.length; i++){
        document.getElementById(`forecast${i+1}`).textContent = fivedayforecast[i].main.temp;};

    let mylist = weatherinfo.list;

    let forecastDayNumber = todayDayNumber;

    for (i = 0; i < mylist.length; i++) {
        var time = mylist[i].dt_txt;
        if (time.includes('18:00:00')) {

            forecastDayNumber += 1;
            if (forecastDayNumber === 7) {
                forecastDayNumber = 0;
            }

            let theDayName = document.createElement("span");
            theDayNumber.textContent = weekday[forecastDayNumber];
            //console.log(">" + weekday[forecastDayNumber]);

            //temp
            let theTemp = document.createElement("p");
            theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

            //weather icon
            let iconcode = weatherInfo.list[i].weather[0].icon;
            let iconPath = "//openweathermap.org/img/w/" + iconcode/jsObject.weather[0].icon + ".png";
            let theIcon = document.createElement("img")
            theIcon.src = iconPath;

            //building html
            let theDay = document.createElement("div");
            theDay.appendChild(theDayName);
            theDay.appendChild(theTemp);
            theDay.appendChild(theIcon);

            //attach to page
            document.getElementById('weatherforecast').appendChild(theDay);


        }
    }
})
  });