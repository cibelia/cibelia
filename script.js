const app = document.getElementById('root');

const logo = document.createElement('img');
logo.setAttribute('class', 'logo');
logo.src = "logo.png";

const container = document.createElement('div');
container.setAttribute('class', 'container');

const column = document.createElement('div');
column.setAttribute('class', 'column');

app.appendChild(logo);
app.appendChild(container);




var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    
    //push years to array
    data.forEach(movie => {

        const card = document.createElement('div');
        card.setAttribute('class', 'card');
  
        const p = document.createElement('p');
        p.setAttribute('class', 'title');
        p.textContent = movie.title + ", " + movie.release_date;
        
        const img = document.createElement('img');
        img.setAttribute('class', 'movieImage');
        card.appendChild(img);
        
        //update movie images

        if (movie.title == "Castle in the Sky") {
            img.src = "photos/Castle in the Sky.jpeg";
        }

        if (movie.title == "Grave of the Fireflies") {
            img.src = "photos/Grave of the Fireflies.jpg";
        }

        if (movie.title == "My Neighbor Totoro") {
            img.src = "photos/My Neighbor Totoro.jpg";
        }

        if (movie.title == "Kiki's Delivery Service") {
            img.src = "photos/Kiki's Delivery Service.jpg";
        }

        if (movie.title == "Only Yesterday") {
            img.src = "photos/Only Yesterday.jpg";
        }
        
        if (movie.title == "Pom Poko") {
            img.src = "photos/Pom Poko.jpg";
        }

        if (movie.title == "Porco Rosso") {
            img.src = "photos/Porco Rosso.jpg";
        }
        if (movie.title == "Castle in the Sky") {
            img.src = "photos/Castle in the Sky.jpeg";
        }

        if (movie.title == "Howl's Moving Castle") {
            img.src = "photos/Howl's Moving Castle.jpg";
        }

        if (movie.title == "Spirited Away") {
            img.src = "photos/Spirited Away.jpg";
        }

        if (movie.title == "Whisper of the Heart") {
            img.src = "photos/Whisper of the Heart.jpg";
        }

        if (movie.title == "The Cat Returns") {
            img.src = "photos/The Cat Returns.jpg";
        }
        
        if (movie.title == "Princess Mononoke") {
            img.src = "photos/Princess Mononoke.jpg";
        }

        if (movie.title == "My Neighbors the Yamadas") {
            img.src = "photos/My Neighbors the Yamadas.jpg";
        }

        if (movie.title == "The Tale of the Princess Kaguya") {
            img.src = "photos/Kaguya.jpg";
        }

        if (movie.title == "Arrietty") {
            img.src = "photos/Arrietty.jpg";
        }

        if (movie.title == "From Up on Poppy Hill") {
            img.src = "photos/Poppy Hill.jpg";
        }

        if (movie.title == "Tales from Earthsea") {
            img.src = "photos/Tales from Earthsea.jpg";
        }
        
        if (movie.title == "The Wind Rises") {
            img.src = "photos/Wind Rises.jpg";
        }

        if (movie.title == "Ponyo") {
            img.src = "photos/Ponyo.png";
        }

        if (movie.title == "When Marnie Was There") {
            img.src = "photos/Marnie.png";
        }

        container.appendChild(card);
        card.appendChild(p);

        card.addEventListener('click', event => {
            const movieClicked = movie.title;
            location.href = "movie.html";
            
        })
        
      });
  


    } else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `Ups, something went wrong!`;
      app.appendChild(errorMessage);
    }
}




request.send();


