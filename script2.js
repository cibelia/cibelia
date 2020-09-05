const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = "logo.png";

const container = document.createElement('div');
container.setAttribute('class', 'container');

const column = document.createElement('div');
column.setAttribute('class', 'column');

app.appendChild(logo);
app.appendChild(container);
app.appendChild(column);

var years = [];


var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    
    //push years to array
    data.forEach (year => {
        years.push(year.release_date);
        
    });

    
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.release_date + " | " + movie.title;
      //h1.textContent = movie.title;

      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });

  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Ups, something went wrong!`;
    app.appendChild(errorMessage);
  }
}



request.send();


/*

const section = document.createElement('div');
        section.setAttribute('class', 'section');

        const h1 = document.createElement('h1');
        h1.textContent = year.release_date;

        column.appendChild(section);
        section.appendChild(h1);


*/