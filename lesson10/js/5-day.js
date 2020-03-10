const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=ff101de3d4d514d1df9ef8df578576ab&units=imperial";

const mydate = new Date();
const y = mydate.getDay();
console.log(y);
const myweekday = new Array(7); 
    myweekday[0] = "Sunday";
    myweekday[1] = "Monday";
    myweekday[2] = "Tuesday";
    myweekday[3] = "Wednesday";
    myweekday[4] = "Thursday";
    myweekday[5] = "Friday";
    myweekday[6] = "Saturday";


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
            console.log(jsObject);
            document.getElementById('current-temp').textContent = jsObject.main.temp;
    });