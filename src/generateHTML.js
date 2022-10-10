const teamArray = require("../index.js");
const fs = require("fs");
const path = require("path");

function generateManager(managerData) {
  return `<div class="col col-lg-3 m-2 mr-2">
  <div class="card" style="width: 18rem">
          <div class="card-body">
            <h2 class="card-title">${managerData.name}</h2>
            <h5 class="card-title">"Manager"<h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${managerData.id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${managerData.email}">${managerData.email}</a></p></li></li>
            <li class="list-group-item">${managerData.officeNumber}</li>
          </ul>
          
        </div>
        </div>
  `;
}

function generateIntern(internData) {
  return `<div class="col col-lg-3 m-2 mr-2">
  <div class="card" style="width: 18rem">
          <div class="card-body">
             <h2 class="card-title">${internData.name}</h2>
            <h5 class="card-title">"Intern"<h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${internData.id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${internData.email}">${internData.email}</a></p></li></li>
            <li class="list-group-item">${internData.school}</li>
          </ul>
         
        </div>
        </div>
  `;
}

function generateEngineer(engineerData) {
  return `
  <div class="col col-lg-3 m-2 mr-2">
  <div class="card" style="width: 18rem">
          <div class="card-body">
                    <h2 class="card-title">${engineerData.name}</h2>
            <h5 class="card-title">"Engineer"<h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${engineerData.id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${engineerData.email}">${engineerData.email}</a></p></li>
            <li class="list-group-item">GitHub Username: <a href="https://www.github.com/${engineerData.github}" download target="_blank">${engineerData.github}</a></p></li>
          </ul>
          
        </div>
        </div>
  `;
}

function addEmployees(teamData) {
  const employeeHTML = [];
  for (var x = 0; x < teamData.length; x++) {
    const empRole = teamData[x].getRole();
    switch (empRole) {
      case "Manager":
        employeeHTML.push(generateManager(teamData[x]));
        break;
      case "Intern":
        employeeHTML.push(generateIntern(teamData[x]));
        break;
      case "Engineer":
        employeeHTML.push(generateEngineer(teamData[x]));
        break;
      default:
        return "Employee is not a manager, intern, or engineer.";
    }
  }
  return employeeHTML.join("");
}

function generateHTML(teamArray) {
  const html = () => {
    return `<!DOCTYPE html>
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
        ${addEmployees(teamArray)}
        </div>
      </div>
    </main>
  </body>
</html>`;
  };

  fs.writeFile("./sample/team.html", html(), function (err) {
    if (err) throw err;
    console.log("All done! Your team profile is ready in sample/team.html!");
  });
}
module.exports = generateHTML;
