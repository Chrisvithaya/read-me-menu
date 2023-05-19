// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      message: 'What is your goal in this challenge?',
      name: 'variety',
      choices: ['See if the code works', 'Play around', 'idk I am lost'],
    },
    {
      type: 'list',
      message: 'Does it work?',
      name: 'answer',
      choices: ['Yes!', 'No!'],
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
