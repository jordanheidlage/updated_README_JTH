// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const path = require('path')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of this Project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: " What's the usage info here?",
    },
    {
        type: 'input',
        name: 'Credits',
        message: " Who is credited with the creation of this?",
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test this?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license are you using?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'How can you be contacted if there are any questions?',
    },
];
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log(responses)
        writeToFile('README.md', generateMarkdown(responses))
    })
}

// Function call to initialize app
init();

