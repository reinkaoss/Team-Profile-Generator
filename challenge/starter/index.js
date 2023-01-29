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
  // {
  //   type: "checkbox",
  //   message: "Please choose your next team member or finish your team",
  //   name: "managerOptions",
  //   choices: ["Engineer", "Intern", "Finish the team"],
  // }, 
]).then(generateManager => {
  const manager = new Manager(generateManager.managerName, generateManager.managerId, generateManager.managerEmail, generateManager.managerOfficeNum);
  newTeam.push(manager);
  buildTeam();
});
} 

// Function to gather the Engineer input
const generateEngineer = () => {
  inquirer.prompt([{
  type: "input",
  message: "Please enter the name of your team Engineer",
  name: "engineerName",
},
{
  type: "input",
  message: "Please enter the ID of your team Engineer",
  name: "engineerId",
},
{
  type: "input",
  message: "Please enter the email address of your team Engineer",
  name: "engineerEmailAdd",
},
{
  type: "input",
  message: "Please enter the the GitHub user of team Engineer",
  name: "engineerGithub",
},
// {
//   type: "checkbox",
//   message: "Please choose your next team member or finish your team",
//   name: "engineerOptions",
//   choices: ["Manager", "Intern", "Finish the team"],
// },
]).then(generateEngineer => {
  const engineer = new Engineer (generateEngineer.engineerName, generateEngineer.engineerId, generateEngineer.engineerEmailAdd, generateEngineer.engineerGithub);
  newTeam.push(engineer);
  buildTeam();
});
} 


// Function to gather the Intern input
const generateIntern = () => {
  inquirer.prompt([{
  type: "input",
  message: "Please enter the name of your team Intern",
  name: "internName",
},
{
  type: "input",
  message: "Please enter the ID of your team Intern",
  name: "internID",
},
{
  type: "input",
  message: "Please enter the email address of your team Intern",
  name: "internEmail",
},
{
  type: "input",
  message: "Please enter the the school name of your Intern",
  name: "internSchoolName",
},
// {
//   type: "checkbox",
//   message: "Please choose your next team member or finish your team",
//   name: "internOptions",
//   choices: ["Engineer", "Finish the team"],
// },
]).then(generateIntern => {
  const intern = new Intern (generateIntern.internName, generateIntern.internID, generateIntern.internEmail, generateIntern.internSchoolName);
  newTeam.push(intern); 
  buildTeam();
  })
};
  
// Main function to direct the user to build a employee based on the first inquirer choice
function buildTeam () {
  inquirer.prompt([{
    type: "list",
    message: "Please select the employee you would like to add to your team?",
    name: "employeeChoice",
    choices: ["Manager", "Engineer", "Intern", "Finish the team"]
  }]).then((response) => {
      if(response.employeeChoice === "Manager"){
          generateManager();
          // console.log(newTeam);
          console.log(" \n Starting Managager...");
      } if(response.employeeChoice === "Engineer") {
        generateEngineer();
      } if(response.employeeChoice === "Intern") {
        generateIntern();
      }if(response.employeeChoice === "Finish the team"){
        console.log("\n Generating your new team...");
        // console.log(newTeam);
        init();
  };
});
}

// Calling the main func
buildTeam();


// Function to write the array with all the new created employees to the final doc
const init = () => {
    console.log("Great! Your team has been created!");
    fs.writeFileSync(outputPath, render(newTeam), {encoding:'utf-8'})
}

// init();

module.exports = ("./index.js")
