const Manager = require("../lib/Manager");
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const fs = require('fs');
const employees = []
/* ------------------------- Generate HTML ------------------------- */
console.log("hit generate html file")
const generateHTML = (data) => {
  console.log("inside generate HTML function")
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <title>My Team</title>
      </head>
      <body>
        <header>
          <div class="p-3 mb-2 bg-danger text-white">
            <h1 class="text-center">My Team</h1>
          </div>
        </header>
       ${generateCard(data)}
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
    
        `;
      };

    const generateCard = () => {
     const newManager = new Manager(data.manager_name, data.manager_id, data.manager_email, data.manager_office_number);
      return `
      <div class="container pt-5">
          <div class="row">
            <div class="card shadow" style="width: 18rem">
              <div class="card-header bg-primary">
                <h2 class="card-title text-white">${newManager.getName()}</h2>
                <h3 class="card-subtitle mb-2 text-white"><i class="fa-solid fa-glasses fa-sm is-white" aria-hidden="true"></i>${employees.role}</h3>
              </div>
              <div class="card-body bg-light">
                <ul class="list-group pt-5 pb-5 pl-2 pr-2">
                  <li class="list-group-item">ID: ${newManager.getid()}</li>
                  <li class="list-group-item">Email: ${newManager.getemail()}</li>
                  <li class="list-group-item">Office Number: ${newManager.getOfficeNumber()}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        `
    }

    // const newEngineer = new Engineer(data.engineer_name, data.engineer_id, data.engineer_email, data.engineer_github)

    // `
    //   <div class="container pt-5">
    //       <div class="row">
    //         <div class="card shadow" style="width: 18rem">
    //           <div class="card-header bg-primary">
    //             <h2 class="card-title text-white">${newEngineer.getName()}</h2>
    //             <h3 class="card-subtitle mb-2 text-white"><i class="fa-solid fa-glasses fa-sm is-white" aria-hidden="true"></i>${employees.role}</h3>
    //           </div>
    //           <div class="card-body bg-light">
    //             <ul class="list-group pt-5 pb-5 pl-2 pr-2">
    //               <li class="list-group-item">ID: ${newEngineer.getid()}</li>
    //               <li class="list-group-item">Email: ${newEngineer.getemail()}</li>
    //               <li class="list-group-item">Office Number: ${newEngineer.getGitHub()}</li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     `


    // const newStudent = new Student(data.student_name, data.student_id, data.student_email, data.student_school)

      //   `
      // <div class="container pt-5">
      //     <div class="row">
      //       <div class="card shadow" style="width: 18rem">
      //         <div class="card-header bg-primary">
      //           <h2 class="card-title text-white">${newIntern.getName()}</h2>
      //           <h3 class="card-subtitle mb-2 text-white"><i class="fa-solid fa-glasses fa-sm is-white" aria-hidden="true"></i>${employees.role}</h3>
      //         </div>
      //         <div class="card-body bg-light">
      //           <ul class="list-group pt-5 pb-5 pl-2 pr-2">
      //             <li class="list-group-item">ID: ${newIntern.getid()}</li>
      //             <li class="list-group-item">Email: ${newIntern.getemail()}</li>
      //             <li class="list-group-item">Office Number: ${newIntern.getSchool()}</li>
      //           </ul>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //   `

  
   function writeToFile(employees) {
    fs.writeFile('./newHTML.html', generateHTML(employees), err => {
      if (err) throw new Error(err);
      console.log("succesfully written to html")
    });
    
   }
  // writeToFile()
  
  module.exports = writeToFile;