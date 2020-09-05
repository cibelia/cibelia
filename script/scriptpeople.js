
titleID = "2de9426b-914a-4a06-a3a0-5e6d9d3886f6";


var requestPeople = new XMLHttpRequest();
requestPeople.open('GET', 'https://ghibliapi.herokuapp.com/people/', true);
requestPeople.onload = function () {
  
  var data = JSON.parse(this.response);

  data.forEach (people => {

    if (people.films == "https://ghibliapi.herokuapp.com/films/" + titleID) // working

    console.log(people);

  })


}

requestPeople.send();