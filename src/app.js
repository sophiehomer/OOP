const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./HTML-template");
const employees = [];
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
      type: "confirm",
      name: "newEmployee",
      message: "Would you like to add a new employee?",
      default: true,
    },
    {
      type: "list",
      name: "role",
      message: "Would you like to add an engineer or an intern?",
      choices: ["Engineer", "Intern"],
    },
  ])
  .then((answers) => {
    console.log("line 79", answers);
    if (answers.newEmployee === true) {
      console.log("create new employee");
    }
    if (answers.newEmployee === false) {
      generateHTML(employees)
      return;
    }
    if (answers.role === "Engineer") {
      engineerPrompt()
      
    } else {
      internPrompt();
    }
  })
  .catch(() => {
    console.log("error!!!");
  });
}

managerPrompt().then((manager) => {
  console.log(manager);
  employees.push(manager);
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
  .then((data) => {
    employees.push(data);
    console.log(employees);
    prompt()
  });
}

//engineerPrompt()

/* ---------------------------- Intern Questions ---------------------------- */
function internPrompt() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the name of the intern",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please a name!");
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
  .then((data) => {
    employees.push(data);
    console.log(employees);
    prompt()
  });
}

// internPrompt()



