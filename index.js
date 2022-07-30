const inquirer = require('inquirer');
const fs = require('fs');
const generateEmployees = require('./src/page-template');
//  library modules
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

//  saves the answers data to the saveTeamData array
const saveTeamData = [];

//  prompts questions for Employee 
const questions = async () => {
    const answers = await inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID#?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is your role?',
            choices: ['Manager', 'Engineer', 'Intern']
        },
    ])

    // if Manager, prompts questions for Manager
    if (answers.role === 'Manager') {
        const managerAnswers = await inquirer.prompt([{
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?'
        }, ])
        //  creates Manager object
        const manager = new Manager(answers.name, answers.id, answers.email, managerAnswers.officeNumber);
        //  pushes Manager object to saveTeamData array
        saveTeamData.push(manager);
    }
    // if Engineer, prompts questions for Engineer
    else if (answers.role === 'Engineer') {
        const engineerAnswers = await inquirer.prompt([{
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        }, ])
        //  creates Engineer object
        const engineer = new Engineer(answers.name, answers.id, answers.email, engineerAnswers.github);
        //  pushes Engineer object to saveTeamData array
        saveTeamData.push(engineer);
    }
    // if Intern, prompts questions for Intern
    else if (answers.role === 'Intern') {
        const internAnswers = await inquirer.prompt([{
            type: 'input',
            name: 'school',
            message: 'What is your school?'
        }, ])
        //  creates Intern object
        const intern = new Intern(answers.name, answers.id, answers.email, internAnswers.school);
        //  pushes Intern object to saveTeamData array
        saveTeamData.push(intern);
    }
    //  prompts questions for next Employee
    const nextEmployee = await inquirer.prompt([{
        type: 'confirm',
        name: 'nextEmployee',
        message: 'Would you like to add another employee?'
    }])
    //  if nextEmployee is true, prompts questions for next Employee
    if (nextEmployee.nextEmployee) {
        return questions();
    }
    //  if nextEmployee is false, calls generateEmployees function
    else {
        return writeToFile();
    }
}
//  calls questions function
questions();

function writeToFile() {
    //  creates html file
    fs.writeFile('./dist/index.html', generateEmployees(saveTeamData), err => {
        if (err) throw err;
        console.log('Successfully wrote to index.html');
    })
}