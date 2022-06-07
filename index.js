const fs = require("fs");
const inquirer = require("inquirer"); 
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern"); 

const teamArray = []; 

const init = () => { 
    addEmployee();
};

const addEmployee = () => {
    inquirer
    .prompt ([
    {
        type: "input",
        name:"name",
        message: "PLEASE ENTER YOUR TEAM MEMBER'S NAME",
    },
    {
        type: "list",
        name: "role",
        message: "WHAT JOB TITLE DOES THIS TEAM MEMBER HOLD?",
        choices: ["Manager", "Engineer", "Intern"],
    },
    {
        type: "input",
        name: "id",
        message: "PLEASE ENTER TEAM MEMBER'S ID",
    },
    {
        type: "input",
        name: "email",
        message: "PLEASE ENTER TEAM MEMBER'S EMAIL ADDRESS",
    },

    ])
    . then(({name, id, email, role }) => {
        let employeeParam = "";
        if (role === "Manager") { 
            employeeParam = "Office Number"
        } else if (role === "Engineer") { 
            employeeParam = "GITHUB USERNAME";
        } else if (role === "Intern") {
            employeeParam = "School's Name";
        }
        
        inquirer
            .prompt([
                {
                type:"input",
                name: "roleContent",
                message: `PLEASE ENTER YOUR TEAM MEMBER'S ${employeeParam}`,
                 },
                {
                type: "list",
                name: "addMore",
                message: "Do you have more team members to add?",
                choices: ["YES", "NO"],
                 },
                

            ])
            .then(({ roleContent, addMore }) => {
                let newEmployee;
                if (role === "Manager") {
                  newEmployee = new Manager(name, id, email, roleContent);
                } else if (role === "Engineer") {
                  newEmployee = new Engineer(name, id, email, roleContent);
                } else if (role === "Intern") {
                  newEmployee = new Intern(name, id, email, roleContent);
                }
                teamArray.push(newEmployee);
                console.log(teamArray);
                if (addMore === "YES") {
                  addEmployee();
                } else {
                  writeToFile("./dist/index.html", generateHTML(teamArray));
                }
              });
          });
      };
