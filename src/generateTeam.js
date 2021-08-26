const fs = require("fs");
const employee = require("../types/employee");
const generateManager = function (manager) {
  return `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h3 class="card-title">Manager</h5>
    <h4>${manager.name}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.id}</li>
    <li class="list-group-item">Email: ${manager.email}</li>
    <li class="list-group-item">Office Number: ${manager.officeNum}</li>
  </ul>
</div>
`;
};

const generateEngineer = function (engineer) {
  return `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h3 class="card-title">Engineer</h5>
    <h4>${engineer.name}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.id}</li>
    <li class="list-group-item">Email: ${engineer.email}</li>
    <li class="list-group-item">Office Number: ${engineer.github}</li>
  </ul>
</div>
`;
};

const generateIntern = function (intern) {
  return `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h3 class="card-title">Intern</h5>
    <h4>${intern.name}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.id}</li>
    <li class="list-group-item">Email: ${intern.email}</li>
    <li class="list-group-item">Office Number: ${intern.school}</li>
  </ul>
</div>
`;
};

//some sort of if statement calling applicable function if memberType= ?

function generateTeam(data) {
  console.log(data);
  const role = employee.role;
  if (role === "manager") {
    generateManager();
  }
  if (role === "engineer") {
    generateEngineer();
  }
  if (role === "intern") {
    generateIntern();
  }
  return writeToFile(data);
}
const writeToFile = (data) => {
  fs.writeFile("src/index.html", JSON.stringify(data), (err) => {
    err ? console.log(err) : console.log("file was written!");
  });
};
module.exports = generateTeam;
