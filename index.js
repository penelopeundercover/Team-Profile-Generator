const generateHTML = require("./src/generateHTML.js");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const fs = require("fs");
const inquirer = require("inquirer");

//Function to initialize app
function init() {
    inquirer.prompt([
        type: "input",
        name: "",
        id: ""
    ])
}