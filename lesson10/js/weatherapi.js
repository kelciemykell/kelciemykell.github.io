const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID={ff101de3d4d514d1df9ef8df578576ab}";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });