const inquirer = require("inquirer");
const fs = require("fs");
const generatedHTML = require("./generatedHTML");

/* ---------------------------- Manager Questions --------------------------- */
const managerPrompt = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter your name",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name!");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "id",
        message: "Enter your ID",
        validate: idInput => {
         if (idInput) {
            return true;
          } else {
            console.log("Please enter your ID!");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email",
        validate: eamilInput => {
         if (eamilInput) {
            return true;
          } else {
            console.log("Please enter your email!");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter your office number",
        validate: officeInput => {
         if (officeInput) {
            return true;
          } else {
            console.log("Please enter your office number!");
            return false;
          }
        }
      },
      {
        type: "confirm",
        name: "newEmployee",
        message: "Would you like to add a new employee?",
        default: true
        
      },
      {
        type: "list",
        name: "role",
        message: "Would you like to add an engineer or an intern?",
        choices: ["Engineer", "Intern"],
        when: ({ confirmnewEmployee }) => confirmnewEmployee,
      }

    ]);
  };

 managerPrompt()
  
//  if (answers.role === "Engineer") {
//      prompt.engineerQuestions
//  } else {
//      prompt.internQuestions
//  }


// function addEmployee(newEmployee){
//  switch (newEmployee){
//  case "Engineer":
//     return engineerQuestions;
//  case "Intern":
//      return internQuestions;
//  case "No":
//     // return managerQuestions  
// }

// }

/* --------------------------- Engineer Questions --------------------------- */
const engineerPrompt = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the name of the engineer",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please a name!");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "id",
        message: "Enter engineer's ID",
        validate: idInput => {
         if (idInput) {
            return true;
          } else {
            console.log("Please enter an ID!");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "email",
        message: "Enter the engineer's email",
        validate: emailInput => {
         if (emailInput) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "github",
        message: "Enter the engineer's github account",
        validate: githubInput => {
         if (githubInput) {
            return true;
          } else {
            console.log("Please enter a github account!");
            return false;
          }
        }
      },

    ])};

    engineerPrompt()
/* ---------------------------- Intern Questions ---------------------------- */
    const internPrompt = () => {
      return inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "Enter the name of the intern",
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please a name!");
              return false;
            }
          }
        },
        {
          type: "input",
          name: "id",
          message: "Enter intern's ID",
          validate: idInput => {
           if (idInput) {
              return true;
            } else {
              console.log("Please an ID!");
              return false;
            }
          }
        },
        {
          type: "input",
          name: "email",
          message: "Enter the intern's email",
          validate: emailInput => {
           if (emailInput) {
              return true;
            } else {
              console.log("Please enter an email!");
              return false;
            }
          }
        },
        {
          type: "input",
          name: "school",
          message: "Enter intern's school",
          validate: schoolInput => {
           if (schoolInput) {
              return true;
            } else {
              console.log("Please enter a school!");
              return false;
            }
          }
        },
  
      ])};


