const Manager = require("../lib/Manager");
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const fs = require('fs');
const employees = []

/* ------------------------- Generate HTML ------------------------- */
const generateHTML = (employees) => {
  console.log(employees)
    // return `
    // <!DOCTYPE html> 
    // <html lang="en"> 
    // <head>
    //   <meta charset="UTF-8">
    //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //   <meta http-equiv="X-UA-Compatible" content="ie=edge">
    //   <title>My Team</title>
    // </head>
  
    // <body>
    //   <header>
    //   </header>
    //   <main class="container">
    //   <div>
    //   ${employees.join}
    //   </div>
    //   </main
    // </body>
    // </html>
    // `;
  };

  module.exports = generateHTML