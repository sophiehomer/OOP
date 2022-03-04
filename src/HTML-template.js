const Manager = require("../lib/Manager");
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const fs = require('fs');
const employees = []

/* ------------------------- Generate HTML ------------------------- */
const generateHTML = (employees) => {
  console.log(employees) 
    return `
        <div class="card shadow" style="width: 18rem">
          <div class="card-header bg-primary">
            <h2 class="card-title text-white">Employee</h2>
            <h3 class="card-subtitle mb-2 text-white"><i class="fa-solid fa-glasses fa-sm is-white" aria-hidden="true"></i> Role</h3>
          </div>
          <div class="card-body bg-light">
            <ul class="list-group pt-5 pb-5 pl-2 pr-2">
              <li class="list-group-item">ID:45609</li>
              <li class="list-group-item">Email: sophie@gmail.com</li>
              <li class="list-group-item">Github: sophiehomer</li>
            </ul>
          </div>
        </div>
    `;
  };



  
// for (let i = 0; i < array.name; i++ ) {
  
// }

  module.exports = generateHTML