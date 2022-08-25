const generateHTML = require("./src/generateHTML.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const fs = require("fs");
const inquirer = require("inquirer");
let teamArray = [];

console.log("Follow the prompts to create a profile of your team members.");

//Function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
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
    .then((manager) => {
      console.table(manager),
})
};


init();
