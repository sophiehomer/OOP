const inquirer = require("inquirer");
const fs = require("fs");
const writeToFile = require("./HTML-template");
const employees = [];
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer")

/* ---------------------------- Manager Questions --------------------------- */
function managerPrompt() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter your name",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Enter your ID",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter your ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email",
      validate: (eamilInput) => {
        if (eamilInput) {
          return true;
        } else {
          console.log("Please enter your email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter your office number",
      validate: (officeInput) => {
        if (officeInput) {
          return true;
        } else {
          console.log("Please enter your office number!");
          return false;
        }
      },
    },
  ]);
}


function prompt() {
  inquirer.prompt([
    {
      type: "list",
      name: "newEmployee",
      message: "Would you like to add a new employee?",
      choices: ["Engineer", "Intern", "No"]
    },
  ])
  .then((answers) => {

    if (answers.newEmployee === "Engineer") {
      engineerPrompt();
    } 
    if (answers.newEmployee === "Intern") {
      internPrompt();
    }
    if (answers.newEmployee === "No") {
      writeToFile(employees);
   
  }})
}

managerPrompt().then((manager) => {
  employees.push(new Manager(manager.name, manager.id, manager.email, manager.officeNumber));
  prompt()

});

/* --------------------------- Engineer Questions --------------------------- */
function engineerPrompt() {
   inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the engineer's name",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Enter the engineer's ID",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter an ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter the engineer's email",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter an email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter the engineer's github account",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter a github account!");
          return false;
        }
      },
    },
  ])
  .then(({ name, id, email, github }) => {
    employees.push(new Engineer(name, id, email, github));
   prompt()
  });
}


/* ---------------------------- Intern Questions ---------------------------- */
function internPrompt() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the intern's name",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Enter the intern's ID",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter an ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter the intern's email",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter an email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "Enter the intern's school",
      validate: (schoolInput) => {
        if (schoolInput) {
          return true;
        } else {
          console.log("Please enter a school!");
          return false;
        }
      },
    },
  ])
  .then(({ name, id, email, school }) => {
    employees.push(new Intern(name, id, email, school));
    prompt()
  });
}

