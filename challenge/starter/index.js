const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Employee = require("./lib/Employee");
// Array to store the output of the inquirer functions
const newTeam = []
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");

// Main function to direct the user to build a employee based on the first inquirer choice
function generateTeam () {
    inquirer.prompt([{
      type: "list",
      message: "Please select the employee you would like to add to your team?",
      name: "employeeChoice",
      choices: ["Manager", "Engineer", "Intern", "Finish the team"]
    }]).then((response) => {
        if(response.employeeChoice === "Manager"){
            generateManager();
            console.log(response);
        } if(response.employeeChoice === "Finish the team"){
            console.log("Your team has been successfuly built!");
        } if(response.employeeChoice === "Engineer") {
          generateEngineer();
        } if(response.employeeChoice === "Intern") {
          generateIntern();
    };
});
}

// Calling the main func
generateTeam();

// Function to gather the Manager input
const generateManager = () => {
    inquirer.prompt([{
    type: "input",
    message: "Please enter the name of your team manager",
    name: "managerName",
  },
  {
    type: "input",
    message: "Please enter the ID of your team manager",
    name: "managerId",
  },
  {
    type: "input",
    message: "Please enter the email address of your team manager",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "Please enter the the office number for your team manager",
    name: "managerOfficeNum",
  },
  {
    type: "checkbox",
    message: "Please choose your next team member or finish your team",
    name: "options",
    choices: ["Engineer", "Intern", "Finish the team"],
  }, 
]).then(generateManager => {
  const manager = new Manager(generateManager.managerName, generateManager.managerId, generateManager.managerEmail, generateManager.managerOfficeNum);
  newTeam.push(manager);
  // console.log(manager);
  console.log(newTeam);
});
} 

// Function to gather the Engineer input
const generateEngineer = () => {
  inquirer.prompt([{
  type: "input",
  message: "Please enter the name of your team Engineer",
  name: "name",
},
{
  type: "input",
  message: "Please enter the ID of your team Engineer",
  name: "id",
},
{
  type: "input",
  message: "Please enter the email address of your team Engineer",
  name: "email",
},
{
  type: "input",
  message: "Please enter the the GitHub user of team Engineer",
  name: "github",
},
{
  type: "checkbox",
  message: "Please choose your next team member or finish your team",
  name: "options",
  choices: ["Engineer", "Intern", "Finish the team"],
},
])
}

// Function to gather the Intern input
const generateIntern = () => {
  inquirer.prompt([{
  type: "input",
  message: "Please enter the name of your team Intern",
  name: "name",
},
{
  type: "input",
  message: "Please enter the ID of your team Intern",
  name: "id",
},
{
  type: "input",
  message: "Please enter the email address of your team Intern",
  name: "email",
},
{
  type: "input",
  message: "Please enter the the school name of your Intern",
  name: "github",
},
{
  type: "checkbox",
  message: "Please choose your next team member or finish your team",
  name: "options",
  choices: ["Engineer", "Intern", "Finish the team"],
},
])
}


// Function to write the array with all the new created employees to the final doc
const init = () => {
  inquirer.prompt(generateTeam).then((response) => {

  });
};
// init();

module.exports = ("./index.js")
