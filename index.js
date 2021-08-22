
const inquirer = require("inquirer");
const fs = require("fs");
const { title } = require("process");

const generateReadMe = (title, description, installation, license, usage, credits, tests, github, email) =>
    `
# ${title}

## Table of Contents
[Installation](#installation)
[License](#license)
[Usage](#usage)
[Credits](#credits)

## Description 
${description}

## Installation
${installation}

## License
${license}

## Usage
${usage}

## Credits
${credits}

## Tests
${tests}

## Questions
### GitHub
${github}

### Email
${email}

`;

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "Please enter a title",
        },
        {
            type: "input",
            name: "description",
            message: "Please enter a description",
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation instructions",
        },
        {
            type: "list",
            name: "license",
            message: "Select a license",
            choices: ["Apache", "Boost", "BSD 3-Clause", "BSD 2-Clause", "Creative Commons", "Eclipse", "GNU", "MIT",
                "Mozilla", "Unlicense"],
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide instructions and examples of use",
        },
        {
            type: "input",
            name: "credits",
            message: "Please enter all credits and collaborators",
        },
        {
            type: "input",
            name: "tests",
            message: "Please list tests used and how to run them",
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your GitHub username",
        },
        {
            type: "input",
            name: "email",
            message: "Please your Email",
        },
    ])
    .then((data) => {
        const filename = `${title}.md`;
        const contentMD = generateReadMe(data);
        fs.writeFile(filename, contentMD, (err) => {
            err ? console.log(err) : console.log("Success!")
        });
    });