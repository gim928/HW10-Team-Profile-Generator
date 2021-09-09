//requiring in fs
const fs = require("fs");
// const Employee = require("../types/employee");
// const Manager = require("../types/manager");
// const Intern = require("../types/intern");
// const Engineer = require("../types/engineer");
// const index = require("../index");

//creates the HTML document with the employee cards inserted
const generateHTML = function (employeeJoin) {
  return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-nav mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Employee Cards-->
                  ${employeeJoin}
              </div>
          </div>
      </main>
       <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>
 
  </html>
`;
};

//creates a card for the manager
const generateManager = function (Manager) {
  return `
<div class="card m-4 shadow-lg p-3 mb-5 bg-light rounded" style="width: 18rem;">
  <div class="card-body custom-header">
    <h3 class="card-title">Manager</h3>
    <h4>${Manager.name}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"id="custom-list">ID: ${Manager.id}</li>
    <li class="list-group-item"id="custom-list">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
    <li class="list-group-item"id="custom-list">Office Number: ${Manager.officeNum}</li>
  </ul>
</div>
`;
};

//creates a card for an engineer
const generateEngineer = function (Engineer) {
  return `
<div class="card m-4 shadow-lg p-3 mb-5 bg-light rounded" style="width: 18rem;">
  <div class="card-body custom-header">
    <h3 class="card-title">Engineer</h3>
    <h4>${Engineer.name}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"id="custom-list">ID: ${Engineer.id}</li>
    <li class="list-group-item"id="custom-list">Email:<a href="mailto:${Engineer.email}">${Engineer.email}</a></li>
    <li class="list-group-item"id="custom-list">Github: <a href= "https://github.com/${Engineer.github}" target="no_blank">${Engineer.github}</a></li>
  </ul>
</div>
`;
};

const generateIntern = function (Intern) {
  return `
<div class="card m-4 shadow-lg p-3 mb-5 bg-light rounded" style="width: 18rem;">
  <div class="card-body custom-header">
    <h3 class="card-title">Intern</h3>
    <h4>${Intern.name}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"id="custom-list">ID: ${Intern.id}</li>
    <li class="list-group-item"id="custom-list">Email: <a href="mailto:${Intern.email}">${Intern.email}</a></li>
    <li class="list-group-item"id="custom-list">School: ${Intern.school}</li>
  </ul>
</div>
`;
};

function generateTeam(teamMembers) {
  console.log(teamMembers);
  var employeeCards = [];
  for (i = 0; i < teamMembers.length; i++) {
    if (teamMembers[i].role === "Manager") {
      const managerCard = generateManager(teamMembers[i]);
      employeeCards.push(managerCard);
    }
    if (teamMembers[i].role === "Engineer") {
      const engineerCard = generateEngineer(teamMembers[i]);
      employeeCards.push(engineerCard);
    }
    if (teamMembers[i].role === "Intern") {
      const internCard = generateIntern(teamMembers[i]);
      employeeCards.push(internCard);
    }
  }
  // console.log(employeeCards);
  var employeeJoin = employeeCards.join("");
  // console.log(employeeJoin);
  // generateHTML(employeeJoin);
  const pageHTML = generateHTML(employeeJoin);
  // console.log(pageHTML);
  writeToFile(pageHTML);
}

const writeToFile = (data) => {
  // var htmlData = JSON.stringify(generateTeam(data));
  fs.writeFile("src/index.html", data, (err) => {
    err ? console.log(err) : console.log("file was written!");
  });
};
module.exports = generateTeam;
