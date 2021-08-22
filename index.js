
const inquirer = require("inquirer");
const fs = require("fs");
let licenseBadge = "";

const licensePick = (license) => {
    switch (license) {
        case "Apache":
            licenseBadge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg) This work is protected under the Apache License: (https://opensource.org/licenses/Apache-2.0)";
            break; 
        case "Boost":
            licenseBadge = "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg) This work is protected under the Boost License: (https://www.boost.org/LICENSE_1_0.txt)";
            break; 
        case "BSD 3-Clause":
            licenseBadge = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg) This work is protected under the BSD License: (https://opensource.org/licenses/BSD-3-Clause)";
            break; 
        case "BSD 2-Clause":
            licenseBadge = "![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg) This work is protected under the BSD License: (https://opensource.org/licenses/BSD-2-Clause)";
            break; 
        case "Creative Commons":
            licenseBadge = "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png) This work is protected under the Creative Commons License: (http://creativecommons.org/publicdomain/zero/1.0/)";
            break; 
        case "Eclipse":
            licenseBadge = "![License](https://img.shields.io/badge/License-EPL%201.0-red.svg) This work is protected under the Eclipse License: (https://opensource.org/licenses/EPL-1.0)";
            break; 
        case "GNU":
            licenseBadge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg) This work is protected under the GNU License: (https://www.gnu.org/licenses/gpl-3.0)";
            break; 
        case "MIT":
            licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) This work is protected under the MIT License: (https://opensource.org/licenses/MIT)";
            break; 
        case "Mozilla":
            licenseBadge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg) This work is protected under the Mozilla License: (https://opensource.org/licenses/MPL-2.0)";
            break; 
        case "Unlicense":
            licenseBadge = "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg) This work is protected under the Unlicense License: (http://unlicense.org/)";
            break; 
        default:
            licenseBadge = "Tjis work is protected by default Copyright Law";
    }
    return licenseBadge;
}

const generateReadMe = (data) =>
    `
# ${data.title}

## Table of Contents
[Installation](#installation)
[License](#license)
[Usage](#usage)
[Credits](#credits)
[Tests](#tests)
[Questions](#questions)

## Description 
${data.description}

## Installation
${data.installation}


## License
${licensePick(data.license)}

## Usage
${data.usage}

## Credits
${data.credits}

## Tests
${data.tests}

## Questions
### GitHub
${data.github}

### Email
${data.email}

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
        const filename = `${data.title}.md`;
        const contentMD = generateReadMe(data);
        fs.writeFile(filename, contentMD, (err) => {
            err ? console.log(err) : console.log("Success!")
        });
    });