const inq = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const myTeam = [];

const obtainManager = 
[
    {
        name:"Name",
        type: "input",
        message: "What is the team Manager's name?"
    },
    {
        name:"Id",
        type: "input",
        message: "What is the team Managers's employee Id?"
    },
    {
        name: "Email",
        type: "input",
        message:"What is the team Manager's email address?"
    },
    {
        name: "Office",
        type: "input",
        message: "What is the team Manager's office number?"
    }
];
const nextTeamMember = 
{
    name: "next",
    type: "list",
    message: "Select the next team member class to enter a new employee, or select finish to finish building your team.",
    choices: ['Engineer','Intern', 'Finish']
};

const obtainEngineer =
[
    {
        name:"Name",
        type: "input",
        message: "What is the Engineer's name?"
    },
    {
        name:"Id",
        type: "input",
        message: "What is the Engineer's employee Id?"
    },
    {
        name: "Email",
        type: "input",
        message:"What is the Engineer's Email Address?"
    },
    {
        name: "Github",
        type: "input",
        message: "What is the Engineer's Github user name?"
    }
];

const obtainIntern = 
[
    {
        name:"Name",
        type: "input",
        message: "What is the Intern's name?"
    },
    {
        name:"Id",
        type: "input",
        message: "What is the Intern's employee Id?"
    },
    {
        name: "Email",
        type: "input",
        message:"What is the Intern's email address?"
    },
    {
        name: "School",
        type: "input",
        message: "What is the Intern's school name?"
    }
];

function createNewEmployee(employeeType,data)
{
    console.log(`created new ${employeeType} employee.`);
    switch(employeeType)
    {
        case 'Manager':
            {
                let employee = new Manager(data.Name, data.Id, data.Email, data.Office);
                myTeam.push(employee);
                break;
            }
        case 'Engineer':
            {
                let employee = new Engineer(data.Name, data.Id, data.Email, data.Github);
                myTeam.push(employee);
                break;
            }
        case 'Intern':
            {
                let employee = new Intern(data.Name, data.Id, data.Email, data.School);
                myTeam.push(employee);
                break;
            }
    }
}


async function init()
{
    const managerInfo = await inq.prompt(obtainManager);
    createNewEmployee('Manager', managerInfo);
    let finished = false;
    while(!finished)
    {
        finished = true;
        let nextInput = await inq.prompt(nextTeamMember);
        if (nextInput.next === 'Engineer')
            {
                finished = false;
                let employeeInfo = await inq.prompt(obtainEngineer);
                createNewEmployee("Engineer", employeeInfo);
            }
        else if(nextInput.next === 'Intern')
            {
                finished = false;
                let employeeInfo = await inq.prompt(obtainIntern);
                createNewEmployee("Intern", employeeInfo);
            }
    }
    console.log(myTeam);
}

init();