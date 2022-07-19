const inquirer = require('inquirer');
const fs = require('fs');

const managerQuestions = [
    {
        name: 'manager',
        type: 'input',
        message: 'What is the name of the team manage?'
    },
    {
        name: 'managerID',
        type: 'input',
        message: 'What is the team managers ID?'
    },
    {
        name: 'managerEmail',
        type: 'input',
        message: 'What is the team managers ID?'
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
