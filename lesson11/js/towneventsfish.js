const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
 
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
     
    const towns = jsonObject['towns'];
   for (let i = 0; i < towns.length; i++ ) {
       if ( towns[i].name =="Fish Haven" ) {
    let section = document.createElement('section');
    let h4 = document.createElement('h4');
    let x;
    for (let x=0; x < towns[i].events.length; x++) {
      h4.innerHTML += towns[i].events[x] + "<br>" ;
      section.appendChild(h4);
      


    }
 

 

document.querySelector('div.events').appendChild(section);
}
}
});






/*const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
            console.table(jsonObject); // temporary checking for valid response and data parsing
            const towns = jsonObject['towns'];

            for (let i = 0; i < towns.length; i++) {
                if (towns[i].name == "Fish Haven") {
                    let events = document.createElement('p');

                    events.textContent = towns[i].events;
                    events.setAttribute('class', 'event');
                    let card = document.createElement('section');
                    card.appendChild(events);

                    document.querySelector('div.events').appendChild(card);
                }
            }
        });