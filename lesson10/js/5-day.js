const day = new Date();

const todayDayNumber = day.getDay();
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ff101de3d4d514d1df9ef8df578576ab&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((weatherinfo) => {
        console.log(weatherinfo);
        /*document.getElementById("townName").textContent = weatherinfo.city.name;

        let mylist = weatherinfo.list;

        let forecastDayNumber = todayDayNumber;

        for (i = 0; i < mylist.length; i++) {
            var time = mylist[i].dt_txt;
            if (time.includes('18:00:00')) {
                console.log("Found on entry with 21:00:00 in the time. it was report " + i +" from the mylist of 40");

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
                let iconPath = "//openweathermap.org/img/w/" + /*iconcode*/jsObject.weather[0].icon + ".png";
                /*let theIcon = document.createElement("img")
                theIcon.src = iconPath;

                //building html
                /*let theDay = document.createElement("div");
                theDay.appendChild(theDayName);
                theDay.appendChild(theTemp);
                theDay.appendChild(theIcon);

                //attach to page
                document.getElementById('weatherforecast').appendChild(theDay);


            }
        }
    })


/*const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=ff101de3d4d514d1df9ef8df578576ab&units=imperial";

current temp for overview - possibly reference weatherapi.js for this
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;
    });*/



