const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHTML = require('./src/teamBuilding')
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
        name: 'intSch',
        type: 'input',
        message: 'Where did the intern attend school?'
    },
    {
        name: 'nextMem',
        type: 'list',
        message: 'What type of team member would you like to add next',
        choices: ['Engineer', 'Intern', 'No more Team Members']
    }
]
createTeam = [];
 function startTeam(memType){
        inquirer.prompt(memType).then((answers) =>{
        console.log(answers)
        const manager = new Manager(answers.manager, answers.managerID, answers.managerEmail, answers.managerOffice)
        createTeam.push(manager)
        checkForMore(answers.nextMem)
    })
}
 startTeam(managerQuestions)

 function checkForMore(answers){
    if(answers === 'No more Team Members'){
        console.log(createTeam)
        fs.writeFile(`./dist/${createTeam[0].getName()}.html`, generateHTML(createTeam))
        return 'no more'
    }
    else if(answers === 'Engineer'){
        newEngineer(engQuestions)
    }
    else if(answers === 'Intern'){
        newIntern(intQuestions)
    }
 }
function newEngineer(engQuestions){
    inquirer.prompt(engQuestions).then((answers) =>  {
        console.log(answers);
        const engineer = new Engineer(answers.engName, answers.engID, answers.engEmail, answers.engGit)
        createTeam.push(engineer)
        checkForMore(answers.nextMem);
})
}
function newIntern(intQuestions){
    inquirer.prompt(intQuestions).then((answers) =>  {
        console.log(answers);
        const intern = new Intern(answers.intName, answers.intID, answers.intEmail, answers.intSch)
        createTeam.push(intern)
        checkForMore(answers.nextMem);
})
}