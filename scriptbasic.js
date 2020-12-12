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
