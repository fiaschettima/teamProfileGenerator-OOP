const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');
const managerQuestions = [
    {
        name: 'manager',
        type: 'input',
        message: 'What is the name of the team manager?'
    },
    {
        name: 'managerID',
        type: 'input',
        message: 'What is the team managers ID?'
    },
    {
        name: 'managerEmail',
        type: 'input',
        message: 'What is the team managers Email?'
    },
    {
        name: 'managerOffice',
        type: 'input',
        message: 'What is the team managers office number?'
    },
    {
        name: 'nextMem',
        type: 'list',
        message: 'What type of team member would you like to add next',
        choices: ['Engineer', 'Intern', 'No more Team Members']
    }
];

const engQuestions = [
    {
        name: 'engName',
        type: 'input',
        message: 'What is the engineers name?'
    },
    {
        name: 'engID',
        type: 'input',
        message: 'What is the engineers ID?'
    },
    {
        name: 'engEmail',
        type: 'input',
        message: 'What is the engineers email?'
    },
    {
        name: 'engGit',
        type: 'input',
        message: 'What is the engineers GitHub username?'
    },
    {
        name: 'nextMem',
        type: 'list',
        message: 'What type of team member would you like to add next',
        choices: ['Engineer', 'Intern', 'No more Team Members']
    }
]

const intQuestions = [
    {
        name: 'intName',
        type: 'input',
        message: 'What is the Interns name?'
    },
    {
        name: 'intID',
        type: 'input',
        message: 'What is the Interns ID?'
    },
    {
        name: 'intEmail',
        type: 'input',
        message: 'What is the interns email?'
    },
    {
        name: 'intGit',
        type: 'input',
        message: 'What is the interns GitHub username?'
    },
    {
        name: 'nextMem',
        type: 'list',
        message: 'What type of team member would you like to add next',
        choices: ['Engineer', 'Intern', 'No more Team Members']
    }
]
 function startTeam(memType){
    var moreTeam = true;
    if(moreTeam){
        inquirer.prompt(memType).then((answers) =>{
            console.log(answers)

            if(answers.nextMem === 'No more Team Members'){
                return 'no more'
                // later add function that will create html page and write to dist
            }
            else if(answers.nextMem === 'Engineer'){
                startTeam(engQuestions)
            }
            else if(answers.nextMem === 'Intern'){
                startTeam(intQuestions)
            }
        })
    }
 }
 startTeam(managerQuestions)