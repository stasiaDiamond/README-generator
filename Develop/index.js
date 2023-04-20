// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
// const questions = [];
inquirer
    .prompt([
        {
            name: "projectTitle",
            message: "Enter the project title:",
            type: "input",
        },
        {
            name: "description",
            message: "Write a brief description of the project that includes what, why, and how:",
            type: "input",
        },
        {
            name: 'tableContents',
            message: "Create a Table of Contents:",
            type: "input",
        },
        {
            name: "installation",
            message: "Enter instructions for install:",
            type: "input",
        },
        {
            name: "usage",
            message: "Enter usage instructions with examples:",
            type: "input",
        },
        {
            name: "license",
            message: "Which license did you use?:",
            type: "list",
            choices: ["MIT", "Apache 2.0", "Mozilla Public 2.0"]
        },
        {
            name: "contributing",
            message: "Shout out collaborators, third-party assets, and/or tutorials:",
            type: "input",
        },
        {
            name: "tests",
            message: "Include tests and examples:",
            type: "input",
        },
        {
            name: "questionGitUserName",
            message: "What is your GitHub username?",
            type: "input",
        },
        {
            name: "questionEmail",
            message: "Enter contact email:",
            type: "input",
        }
        
    ])
    .then((ans) => {
        console.log(ans);
        const output = `# ${ans.projectTitle}

## Description

${ans.description}

## Table of Contents

${ans.tableContents}

## Installation

${ans.installation}

## Usage

${ans.usage}

## License

${ans.license} 

## Contributing

${ans.contributing}

## Tests

${ans.tests}

## Questions

Link to my GitHub: <https://github.com/${ans.questionGitUserName}>

For additional questions, please email: [Contact Email](mailto:${ans.questionEmail})
`;
        console.log(output);

        fs.writeFile("GeneratedREADME.md", output, err => {
            if(err){
                console.log(err);
            } else {
                console.log("Your README has been generated.");
            }
        });
    });
    
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();




// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
