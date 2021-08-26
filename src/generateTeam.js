const fs = require("fs");
const Employee = require("../types/employee");
const Manager = require("../types/manager");
const Intern = require("../types/intern");
const Engineer = require("../types/engineer");
const index = require("../index");

const generateHTML = function (employeeCards) {
  return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Employee Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
};

const generateManager = function (Manager) {
  return `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h3 class="card-title">Manager</h3>
    <h4>${Manager.name}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${Manager.id}</li>
    <li class="list-group-item">Email: ${Manager.email}</li>
    <li class="list-group-item">Office Number: ${Manager.officeNum}</li>
  </ul>
</div>
`;
};

const generateEngineer = function (Engineer) {
  return `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h3 class="card-title">Engineer</h3>
    <h4>${Engineer.name}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${Engineer.id}</li>
    <li class="list-group-item">Email: ${Engineer.email}</li>
    <li class="list-group-item">Github: ${Engineer.github}</li>
  </ul>
</div>
`;
};

const generateIntern = function (Intern) {
  return `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h3 class="card-title">Intern</h3>
    <h4>${Intern.name}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${Intern.id}</li>
    <li class="list-group-item">Email: ${Intern.email}</li>
    <li class="list-group-item">School: ${Intern.school}</li>
  </ul>
</div>
`;
};

// var employeeCards = [];
// const employeeJoin = employeeCards.join("");
// console.log(employeeJoin);

function generateTeam(teamMembers) {
  // console.log(teamMembers);
  var employeeCards = [];
  for (i = 0; i < teamMembers.length; i++) {
    if (teamMembers[i].role === "manager") {
      const managerCard = generateManager(teamMembers[i]);
      employeeCards.push(managerCard);
    }
    if (teamMembers[i].role === "engineer") {
      const engineerCard = generateEngineer(teamMembers[i]);
      employeeCards.push(engineerCard);
    }
    if (teamMembers[i].role === "intern") {
      const internCard = generateIntern(teamMembers[i]);
      employeeCards.push(internCard);
    }
  }
  // var employeeJoin = employeeCards.join("");
  // console.log(employeeJoin);
  generateHTML(employeeCards);
  const pageHTML = JSON.stringify(generateHTML(employeeCards));
  writeToFile(pageHTML);
}

const writeToFile = (pageHTML) => {
  // var htmlData = JSON.stringify(generateTeam(data));
  fs.writeFile("src/index.html", pageHTML, (err) => {
    err ? console.log(err) : console.log("file was written!");
  });
};
module.exports = generateTeam;
