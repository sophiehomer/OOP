const inquirer = require("inquirer");

/* ---------------------------- Manager Questions --------------------------- */
const managerQuestions = [
{
    type:"input",
    name:"name",
    message:"What is the manager's name?"
}, 
{
    type:"input",
    name:"id",
    message:"What is the manager's ID number?"
}, 
{
    type:"input",
    name:"email",
    message:"What is the manager's email?"
}, 
{
    type:"input",
    name:"officeNumber",
    message:"What is the manager's office number?"
} 
]

/* ---------------------------- Engineer Questions --------------------------- */
    const engineerQuestions = [
    {
        type:"input",
        name:"name",
        message:"What is the engineer's name?"
    }, 
    {
        type:"input",
        name:"id",
        message:"What is the engineer's ID number?"
    }, 
    {
        type:"input",
        name:"email",
        message:"What is the engineer's email?"
    }, 
    {
        type:"input",
        name:"officeNumber",
        message:"What is the engineers github account?"
    } 
    ]

    /* ---------------------------- Intern Questions --------------------------- */
    const internQuestions = [
    {
        type:"input",
        name:"name",
        message:"What is the intern's name?"
    }, 
    {
        type:"input",
        name:"id",
        message:"What is the intern's ID number?"
    }, 
    {
        type:"input",
        name:"email",
        message:"What is the intern's email?"
    }, 
    {
        type:"input",
        name:"officeNumber",
        message:"What school does the intern attend?"
    } 
    ]

