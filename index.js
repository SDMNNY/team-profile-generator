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
      const generateEmployeeCard = (employee) => {
        let roleContent;
        switch (employee.getRole()) {
          case "Manager":
            roleContent = `Office Number: ${employee.officeNumber()}`;
            break;
          case "Engineer":
            roleContent = `GitHub: <a href="https://github.com/${employee.getGithub()}" target="blank">${employee.getGithub()}</a>`;
            break;
          case "Intern":
            roleContent = `School Name: ${employee.getSchool()}`;
            break;
        }
        return `
              <div class="card text-white bg-danger mb-5 mr-4 col-sm-1 col-md-4 col-lg-4" style="max-width: 18rem">
                <div class="card-header">
                  <h2>${employee.getName()}</h2>
                  <h3>${employee.getRole()}</h3>
                </div>
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item bg-danger param">ID: ${employee.getId()}</li>
                    <li class="list-group-item bg-danger param">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li class="list-group-item bg-danger param">${roleContent}</li>
                  </ul>
                </div>
              </div>`;
      };
      const renderEmployeeCard = (teamArray) => {
        const htmlCards = [];
        teamArray.forEach((employee) => {
          htmlCards.push(generateEmployeeCard(employee));
        });
        return htmlCards.join("");
      };
      
      const generateHTML = (teamArray) => {
        return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Team Profile Generator! | Quick access to your employee info</title>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
            integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
            crossorigin="anonymous"/>
          <link rel="stylesheet" href="../assets/css/styles.css" />
        </head>
        <body class="bg-dark">
          <header>
            <div class="jumbotron jumbotron-fluid bg-danger text-white">
              <div class="container">
                <h1 class="display-4 text-center">My Team!</h1>
                <p class="lead text-center">
                  Readily displays your team information.
                </p>
              </div>
            </div>
          </header>
          <main class="container row m-auto d-flex justify-content-around align-items-center">
                  ${renderEmployeeCard(teamArray)}
          </main>
        </body>
      </html>
      `;
      };
      
      const writeToFile = (fileName, data) => {
        fs.writeFile(fileName, data, (err) => {
          err
            ? console.error(`Failed to create HTML file: ${err}`)
            : console.log("Successfully created your HTML File!");
        });
      };
      
      init();