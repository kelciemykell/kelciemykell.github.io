const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    console.table(jsonObject); // temporary checking for valid response and data parsing
    
    for (let i = 0; i < towns.length; i++) {
      
      let card = document.createElement('section');
      let name = document.createElement('name');
      let motto = document.createElement('motto';)
      let yearFounded = document.createElement('yearFounded');
      let currentPopulation = document.createElement('currentPopulation')
      let averageRainfall = document.createElement('averageRainfall')
      let image = document.createElement('img');
      
      name.textContent = towns[i].name;
      card.appendChild(name);
      document.querySelector('div.city').appendChild(card);

      motto.textContent = city[i].motto;
      card.appendChild(motto);

      yearFounded.textContent = 'Year Founded:' + ' ' + towns[i].yearFounded;
      card.appendChild(yearFounded);

      currentPopulation.textContent = 'Current Population:' + ' ' + towns[i].currentPopulation;
      card.appendChild(currentPopulation);

      averageRainfall.textContent = 'Average Rainfall:' + ' ' + towns[i].averageRainfall;
      card.appendChild(averageRainfall);

      image.setAttribute('src', prophets[i].imageurl);
      card.appendChild(image);
      image.setAttribute('alt', city[i].name + ' image' );


    }

  });