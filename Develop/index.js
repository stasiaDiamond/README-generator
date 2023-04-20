// ---BELOW---
// declaring that file system and inquirer are necessary
const fs = require("fs");
const inquirer = require("inquirer");

// ---BELOW---
// setting up inquirer questions
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
    // ---BELOW---
// setting all answers to Markdown syntax
    .then((ans) => {
        const output = `# ${ans.projectTitle}

## Description

${ans.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


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

// ---BELOW---
// file system writing the Generated README, including output answers, plus an error/success function

        fs.writeFile("GeneratedREADME.md", output, err => {
            if(err){
                console.log(err);
            } else {
                console.log("SWEET! Your README has been generated.");
            }
        });
    });
    