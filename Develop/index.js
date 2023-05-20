// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');

const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'Project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description?',
      },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions?',
      },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution info?',
      },
    {
        type: 'input',
        name: 'Email',
        message: 'For questions(email)?',
      },
    {
        type: 'input',
        name: 'Github',
        message: 'For questions(github)?',
      },

    {
      type: 'list',
      message: 'License?',
      name: 'License',
      choices: ['ISC', 'GNUPLv3', 'MIT'],
    //   filter(val)
    //     return val.toLowerCase()
    },
];

function runQuery(){
    return inquirer.createPromptModule(questions)
    .then((answers)=> {
        console.log(answers)
        return answers
    })
    .catch((error)=>{
        console.log(error)
    })
}

runQuery()

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    FileSystem.writeToFile(fileName,data,error => {
        if(error) {
            return console.log(error)
        }
        console.log('Your READMe.md file has beengenerated!')
    })
}

// // TODO: Create a function to initialize app
async function init() {
    try {
        
        // ask user inquirer questions
        const userInput = await inquirer.createPromptModule(questions);
        console.log('your responses: ', userInput);
        // console.log('Your GitHub user info: ', userData);


    } catch (error) {
        console.log(error)
    }
}

// // Function call to initialize app
init();
