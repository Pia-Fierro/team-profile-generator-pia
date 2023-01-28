const inquirer = require ('inquirer');
const fs = require ('fs');

// const to create employee data
const Employee = require ('./lib/Employee');
const Manager = require ('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern'); 

// const to create HTML card for each employee and HTML page
const generateHTML = require ('./dist/generateHTML');
const teamCards = require ('./dist/generatecardsHTML');

teamCardsArray = [];
managerCardsArray = [];
engineerCardsArray = [];
internCardsArray = [];

 
const typeEmployeeQuestions = [
    {
        type: 'list',
        message: 'What type of employee would you like to add?',
        name: 'typeEmployee',
        choices : ['Manager', 'Engineer', 'Intern', 'No more members to add']
    }
]
// questions for all the employees 
const commonQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Employee name:'
    },
    {
        type: 'input',
        name: 'id',
        message : 'Employee ID:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Employee email:'
    }
]

const managerQuestions = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Manager office number:'
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'github',
        message: 'Engineer GitHub user name:'
    }
]
const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: 'Intern school:'
    }
]

function promptUser () {
    return inquirer.prompt (typeEmployeeQuestions)
    .then (({typeEmployee}) => {
        switch (typeEmployee) {
            case 'Manager':
                employeeManager(typeEmployee);
                break;
            case 'Engineer':
                employeeEngineer (typeEmployee);
                break;
            case 'Intern':
                employeeIntern (typeEmployee);
                break;        
            default:
                teamCardsArray = managerCardsArray.concat(engineerCardsArray, internCardsArray);
                teamCardsJoin = teamCardsArray.join('');
                htmlFile = generateHTML(teamCardsJoin);
                writeToFile ("index.HTML", teamCardsJoin);
                break;   
        }
    })
}

function employeeManager () {
    return inquirer.prompt (commonQuestions)
    .then(({name,id,email}) => {
        return inquirer.prompt(managerQuestions)
        .then (({officeNumber}) => {
            const manager = new Manager (name, id, email, officeNumber);
            teamCards(manager);
            managerCardsArray.push(teamCards(manager));
            promptUser();
        })
        })
    }
function employeeEngineer (typeEmployee) {
    return inquirer.prompt(commonQuestions)
    .then (({name, id, email}) => {
        return inquirer.prompt(engineerQuestions)
        .then (({github}) => {
            const engineer = new Engineer (name, id, email, github);
            teamCards(engineer);
            engineerCardsArray.push(teamCards(engineer));

            promptUser()

        })
    })
}

function employeeIntern (typeEmployee) {
    return inquirer.prompt(commonQuestions)
    .then (({name, id, email}) => {
        return inquirer.prompt (internQuestions)
        .then (({school}) => {
            const intern = new Intern (name, id, email, school);
            teamCards(intern);
            internCardsArray.push(teamCards(intern));
            
            promptUser();
        })
    })
}

function writeToFile () {
    fs.writeFile ('index.html', htmlFile, (err) => err ? console.log(err): console.log ("HTML file successfully created :)!"))
}

promptUser();