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
	
	const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

	for (let i = 0; i < jsObject.list.length; i++ ){
		if (new Date(jsObject.list[i].dt_txt).getHours() == 18) {

			var forecastAPI = jsObject.list[i];
			
			let div1 = document.createElement('div');
			let div2 = document.createElement('div');
			let head = document.createElement('bold');
			let div3 = document.createElement('div');
			//let image = document.createElement('img');
			let temp = document.createElement('p');

            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png'; // note the concatenation
            const desc = jsObject.weather[0].description; // note how we reference the weather array
            document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
            document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
            document.getElementById('icon').setAttribute('alt', desc);


			head.textContent = dayOfWeek[new Date(apiURL.dt_txt).getDay()];
			image.setAttribute('src', imgSource);
			image.setAttribute('alt', apiURL.weather[0].description);
			temp.innerHTML = apiURL.main.temp.toFixed(1) + " &#8457;";

			div1.appendChild(div2);
			div2.classList.add("bold");
			div2.appendChild(head);
			div3.classList.add("data");
			div1.appendChild(div3);
			div3.appendChild(image);
			div3.appendChild(temp);

			document.querySelector('div.forecastdiv').appendChild(div1);

		}
	}
  });
