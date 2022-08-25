const generateHTML = require("./src/generateHTML.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const teamArray = [];

console.log("Follow the prompts to build your team!");

//Function to initialize app
function init() {
  addMember();
  generateHTML();
}
function addMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What role does this employee have on the team?",
        choices: ["Manager", "Intern", "Engineer", "No more employees to add."],
      },
    ])
    .then(function (userInput) {
      switch (userInput.addMember) {
        case "Manager":
          addManager();
          break;
        case "Intern":
          addIntern();
          break;
        case "Engineer":
          addEngineer();
          break;
        default:
          generateHTML();
      }
    });
}

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
      },
      {
        type: "number",
        name: "id",
        message: "What is the manager's id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
      },
      {
        type: "number",
        name: "officeNumber",
        message: "What is the manager's office number?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamArray.push(manager);
      addMember();
    });
}
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "number",
        name: "id",
        message: "What is the intern's id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email address?",
      },
      {
        type: "number",
        name: "school",
        message: "What school is the intern attending?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamArray.push(intern);
      addMember();
    });
}
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "number",
        name: "id",
        message: "What is the engineer's id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
      },
      {
        type: "number",
        name: "github",
        message: "What is the engineer's github username?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamArray.push(engineer);
      addMember();
    });
}

init();

module.exports = teamArray;
