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
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[1]);
    }
    console.log(vars);
    return vars;
}

var titleID = getUrlVars()[0];

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films/' + titleID, true);
request.onload = function () {

  var data = JSON.parse(this.response);


  if (request.status >= 200 && request.status < 400) {

        
        document.title = data.title;
        
        console.log(document.title);

        const imageCard = document.createElement('div');
        imageCard.setAttribute('class', 'imageCard');

        const img = document.createElement('img');
        img.setAttribute('class', 'movieImage');
        imageCard.appendChild(img);
        img.src = "photos/" + titleID + ".jpg";

        const box = document.createElement('div');
        box.setAttribute('class', 'box');

        const titleH5 = document.createElement('h5');
        titleH5.textContent = "Title: "; 
        const titleContent = document.createElement('p');
        titleContent.setAttribute('class', 'titleContent');
        titleContent.textContent = data.title; 
        box.appendChild(titleH5);
        titleH5.appendChild(titleContent);

        const yearH5 = document.createElement('h5');
        yearH5.textContent = "Year: "; 
        const yearContent = document.createElement('p');
        yearContent.setAttribute('class', 'yearContent');
        yearContent.textContent = data.release_date; 
        box.appendChild(yearH5);
        yearH5.appendChild(yearContent);

        const directorH5 = document.createElement('h5');
        directorH5.textContent = "Director: "; 
        const directorContent = document.createElement('p');
        directorContent.setAttribute('class', 'directorContent');
        directorContent.textContent = data.director; 
        box.appendChild(directorH5);
        directorH5.appendChild(directorContent);

        const producerH5 = document.createElement('h5');
        producerH5.textContent = "Producer: "; 
        const producerContent = document.createElement('p');
        producerContent.setAttribute('class', 'producerContent');
        producerContent.textContent = data.producer; 
        box.appendChild(producerH5);
        producerH5.appendChild(producerContent);


        const movieDescription = document.createElement('p');
        movieDescription.textContent = data.description; 
        movieDescription.setAttribute('class', 'movieDescription');
        box.appendChild(movieDescription);

        container.appendChild(imageCard);
        container.appendChild(box);


    } else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `Ups, something went wrong!`;
      app.appendChild(errorMessage);
    }
}

request.send();
