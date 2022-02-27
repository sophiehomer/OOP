const inquirer = require("inquirer");
const fs = require("fs");
const generatedHTML = require("./generatedHTML");
const { ChildProcess } = require("child_process");
/* ---------------------------- Manager Questions --------------------------- */
const managerQuestions = [
{
    type:"input",
    name:"name",
    message:"What is your name?"
}, 
{
    type:"input",
    name:"id",
    message:"What is your ID number?"
}, 
{
    type:"input",
    name:"email",
    message:"What is your email?"
}, 
{
    type:"input",
    name:"officeNumber",
    message:"What is your office number?"
},

{
    type:"input",
    name:"add_employee",
    message:"Would you like to add an employee?",
    choices: ["Yes", "No"]
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
   