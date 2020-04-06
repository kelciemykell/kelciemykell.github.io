const apiURL= "https://kelciemykell.github.io/salmon-river/guides.json";
fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const guides = jsonObject['guides'];
    console.table(jsonObject); // temporary checking for valid response and data parsing
    
    for (let i = 0; i < guides.length; i++) {
      
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let info = document.createElement('info');
      let image = document.createElement('img');
      
      h2.textContent = guides[i].name;
      card.appendChild(h2);
      document.querySelector('div.cards').appendChild(card);

      info.textContent = 'info';
      card.appendChild(info);

      image.setAttribute('src', guides[i].imageurl);
      card.appendChild(image);

    }

  });
