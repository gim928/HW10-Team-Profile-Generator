const inquirer = require("inquirer");
const generateTeam = require("./src/generateTeam");
const fs = require("fs");
const Intern = require("./types/intern");
const Engineer = require("./types/engineer");
const Manager = require("./types/manager");

const teamMembers = [];
managerQuestions();
// .then(teamMembers)=> {
//   return
// }

function managerQuestions() {
  const data = inquirer
    .prompt([
      {
        type: "input",
        message: "What is your manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the manager's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the team manager's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the team manager's office number?",
        name: "officeNum",
      },
      {
        type: "list",
        message: "Which type of team member would you like to add?",
        choices: [
          "engineer",
          "intern",
          "I don't want to add any more team members",
        ],
        name: "addMember",
      },
    ])
    .then((data) => {
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNum
      );
      // console.log(data);
      teamMembers.push(manager);
      // console.log(teamMembers);
      if (data.addMember === "engineer") {
        engineerQuestions();
      }
      if (data.addMember === "intern") {
        internQuestions();
      }
      if (data.addMember === "I don't want to add any more team members") {
        generateTeam(teamMembers);
        // writeToFile(teamMembers);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function engineerQuestions() {
  const data = inquirer
    .prompt([
      {
        type: "input",
        message: "What is your engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the engineer's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the engineer's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the engineer's github?",
        name: "github",
      },
      {
        type: "list",
        message: "Which type of team member would you like to add?",
        choices: [
          "engineer",
          "intern",
          "I don't want to add any more team members",
        ],
        name: "addMember",
      },
    ])
    .then((data) => {
      // console.log(data);
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      teamMembers.push(engineer);
      if (data.addMember === "engineer") {
        engineerQuestions();
      }
      if (data.addMember === "intern") {
        internQuestions();
      }
      if (data.addMember === "I don't want to add any more team members") {
        generateTeam(teamMembers);
        // writeToFile(teamMembers);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function internQuestions() {
  const data = inquirer
    .prompt([
      {
        type: "input",
        message: "What is your intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the intern's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the intern's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is school does the intern go to?",
        name: "school",
      },
      {
        type: "list",
        message: "Which type of team member would you like to add?",
        choices: [
          "engineer",
          "intern",
          "I don't want to add any more team members",
        ],
        name: "addMember",
      },
    ])
    .then((data) => {
      const intern = new Intern(data.name, data.id, data.email, data.school);
      teamMembers.push(intern);
      if (data.addMember === "engineer") {
        engineerQuestions();
      }
      if (data.addMember === "intern") {
        internQuestions();
      }
      if (data.addMember === "I don't want to add any more team members") {
        generateTeam(teamMembers);
        // writeToFile(teamMembers);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
