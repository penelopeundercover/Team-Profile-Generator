const teamArray = require("../index.js");
const fs = require("fs");
const path = require("path");

function generateHTML(teamArray) {
  const html = () => {
    return `< !DOCTYPE html >
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
      integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
      crossorigin="anonymous"
    />

    <link rel="stylesheet" href="./dist/style.css" />
    <title>Team Profile</title>
  </head>

  <body>
    <header>
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-4">My Team</h1>
        </div>
      </div>
    </header>

    <main>
      <div class="card-container">
        <div class="row">
            <div class="col col-lg-3 m-2 mr-2">
        <div class="card-1" style="width: 18rem">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h2 class="card-title">${teamArray[0].name}</h2>
            <h5 class="card-title">"Manager"<h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${teamArray[0].id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${teamArray[0].email}">${teamArray[0].email}</a></p></li></li>
            <li class="list-group-item">${teamArray[0].officeNumber}</li>
          </ul>
          
        </div>
        </div>

        <div class="col col-lg-3 m-2 mr-2">
        <div class="card-2" style="width: 18rem">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
              <h2 class="card-title">${teamArray[1].name}</h2>
            <h5 class="card-title">"Manager"<h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${teamArray[1].id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${teamArray[1].email}">${teamArray[1].email}</a></p></li></li>
            <li class="list-group-item">${teamArray[1].school}</li>
          </ul>
         
        </div>
        </div>

<div class="col col-lg-3 m-2 mr-2">
        <div class="card-3" style="width: 18rem">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
                    <h2 class="card-title">${teamArray[2].name}</h2>
            <h5 class="card-title">"Manager"<h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${teamArray[2].id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${teamArray[2].email}">${teamArray[2].email}</a></p></li>
            <li class="list-group-item">GitHub Username: <a href="https://www.github.com/${teamArray[2].githubusername}" download target="_blank">${teamArray[2].githubusername}</a></p></li>
          </ul>
          
        </div>
        </div>
        </div>
      </div>

        
      </div>
    </main>
  </body>
</html>`;
  };

  fs.writeFile("./sample/team.html", html, function (err) {
    if (err) throw err;
    console.log("All done! Your team profile is ready in sample/team.html!");
  });
}
module.exports = generateHTML;
