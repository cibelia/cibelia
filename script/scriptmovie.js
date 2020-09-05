const app = document.getElementById('root');

const logo = document.createElement('img');
logo.setAttribute('class', 'logo');
logo.src = "C:/Users/camogas/Desktop/Git/cibelia.github.io/logo.png";

const container = document.createElement('div');
container.setAttribute('class', 'container');

const column = document.createElement('div');
column.setAttribute('class', 'column');

app.appendChild(logo);
app.appendChild(container);

//manage to find a way to identify the id dynamically (arrays?)
var titleID = 0; 

if (document.title == 'Arrietty') {
  titleID = '2de9426b-914a-4a06-a3a0-5e6d9d3886f6'
}
if (document.title == 'Castle in the Sky') {
  titleID = '2baf70d1-42bb-4437-b551-e5fed5a87abe'
}
if (document.title == 'Grave of the Fireflies') {
  titleID = '12cfb892-aac0-4c5b-94af-521852e46d6a'
}
if (document.title == 'My Neighbor Totoro') {
  titleID = '2de9426b-914a-4a06-a3a0-5e6d9d3886f6'
}
if (document.title == "Kiki's Delivery Service") {
  titleID = 'ea660b10-85c4-4ae3-8a5f-41cea3648e3e'
}
if (document.title == 'Only Yesterday') {
  titleID = '4e236f34-b981-41c3-8c65-f8c9000b94e7'
}
if (document.title == 'Porco Rosso') {
  titleID = 'ebbb6b7c-945c-41ee-a792-de0e43191bd8'
}
if (document.title == 'Pom Poko') {
  titleID = '1b67aa9a-2e4a-45af-ac98-64d6ad15b16c'
}
if (document.title == 'Whisper of the Heart') {
  titleID = 'ff24da26-a969-4f0e-ba1e-a122ead6c6e3'
}
if (document.title == 'Princess Mononoke') {
  titleID = '0440483e-ca0e-4120-8c50-4c8cd9b965d6'
} 
if (document.title == 'My Neighbors the Yamadas') {
  titleID = '45204234-adfd-45cb-a505-a8e7a676b114'
}
if (document.title == 'Spirited Away') {
  titleID = 'dc2e6bd1-8156-4886-adff-b39e6043af0c'
}
if (document.title == 'The Cat Returns') {
  titleID = '90b72513-afd4-4570-84de-a56c312fdf81'
}
if (document.title == "Howl's Moving Castle") {
  titleID = 'cd3d059c-09f4-4ff3-8d63-bc765a5184fa'
}


//console.log(title);


var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films/' + titleID, true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {

        const imageBox = document.createElement('div');
        imageBox.setAttribute('class', 'card');

        const img = document.createElement('img');
        img.setAttribute('class', 'movieImage');
        imageBox.appendChild(img);

        if (data.title == "Arrietty") {
          img.src = "C:/Users/camogas/Desktop/Git/cibelia.github.io/photos/Arrietty.jpg";
        }

        const box = document.createElement('div');
        box.setAttribute('class', 'card');
  
        //details for movie
        const details = document.createElement('p');
        details.setAttribute('class', 'details');
        details.textContent = "Title: " + data.title + " | " + "Year: " + data.release_date + " | " + "Director: " + data.director + " | " + "Producer: " + data.producer;

        const description = document.createElement('p');
        description.setAttribute('class', 'description');
        description.textContent = data.description;

        container.appendChild(imageBox);
        container.appendChild(box);
        box.appendChild(details); 
        box.appendChild(description);

        var requestPeople = new XMLHttpRequest();
        requestPeople.open('GET', 'https://ghibliapi.herokuapp.com/people/', true);
        requestPeople.onload = function () {
            
            var data = JSON.parse(this.response);

            data.forEach (people => { 

                if (people.films == "https://ghibliapi.herokuapp.com/films/" + titleID) {


                    console.log(people);

                } 

  })


}


    } else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `Ups, something went wrong!`;
      app.appendChild(errorMessage);
    }
}





request.send();
