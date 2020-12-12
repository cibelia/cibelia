const app = document.getElementById('root');

const indexLink = document.createElement('a');
indexLink.href = "index.html";

const logo = document.createElement('img');
logo.setAttribute('class', 'logo');
logo.src = "logo.png";

indexLink.appendChild(logo);

const header = document.createElement('header');
header.setAttribute('class', 'header');

const container = document.createElement('div');
container.setAttribute('class', 'container');

const column = document.createElement('div');
column.setAttribute('class', 'column');

app.appendChild(indexLink);
app.appendChild(header);
app.appendChild(container);



var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    
    data.forEach(movie => {

        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('data-movieID', movie.id);
        
  
        const p = document.createElement('p');
        p.setAttribute('class', 'title');
        p.textContent = movie.title + ", " + movie.release_date;
        
        const img = document.createElement('img');
        img.setAttribute('class', 'movieImage');
        card.appendChild(img);

        img.src = "photos/" + movie.id + ".jpg";
    

        container.appendChild(card);
        card.appendChild(p);

        card.addEventListener('click', event => {
            var movieClicked = movie.title;
            location.href = "movie.html?" + "movieid=" + card.getAttribute('data-movieID', movie.id);
        })
        
      });
  
    } else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `Ups, something went wrong!`;
      app.appendChild(errorMessage);
    }
}

request.send();


