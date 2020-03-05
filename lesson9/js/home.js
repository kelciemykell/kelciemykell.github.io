const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++) {
        if(i==1 || i==4 || 1==5){
      let h3 = document.createElement('h3'); //motto
      let yearf = document.createElement('p'); 
      let population = document.createElement('p')
      let avgrain = document.createElement('p')
      let photo = document.createElement('img');
      let card = document.createElement('section');
      let h2 = document.createElement('h2'); //name
      
      
      h2.textContent = towns[i].name;
      card.appendChild(h2);
      document.querySelector('div.city').appendChild(card);

      h3.textContent = towns[i].motto;
      card.appendChild(h3);

      yearf.textContent = 'Year Founded:' + ' ' + towns[i].yearFounded;
      yearf.setAttribute('class', 'yearf');
      card.appendChild(yearf);

      population.textContent = 'Current Population:' + ' ' + towns[i].currentPopulation;
      population.setAttribute('class', 'population');
      card.appendChild(population);

      avgrain.textContent = 'Average Rainfall:' + ' ' + towns[i].averageRainfall;
      avgrain.setAttribute('class', 'avgrain');
      card.appendChild(avgrain);

      image.setAttribute('src', prophets[i].photo);
      card.appendChild(photo);
      photo.setAttribute('class', ' image' );

}
}

});