var fs = require('fs');
var inquirer = require("inquirer");
// array of questions for user
const questions = [];

inquirer
  .prompt([
    {
      type: "input",
      message: "Please enter the Project Title",
      name: "title"
    },
    {
      type: "input",
      message: "Enter the Description",
      name: "description"
    },
    {
      type: "input",
      message: "Enter Table of Contents",
      name: "tableOfContents"
    },
    {
        type: "input",
        message: "Enter Installation",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage",
        name: "usage"
    },
    {
        type: "input",
        message: "License",
        name: "license"
    },
    {
        type: "input",
        message: "Contributing",
        name: "contributing"
    },
    {
        type: "input",
        message: "Tests",
        name: "tests"
    },
    {
        type: "input",
        message: "Questions",
        name: "questions"
    }
  ])
  .then(function(response) {
    const file = `# Title
    ${response.title}
## Description
    ${response.description}
## Content
    ${response.tableOfContents}
## Instalation
    ${response.installation}
## Usage
    ${response.usage}
## License
    ${response.license}
## Contributing
    ${response.contributing}
## Tests
    ${response.tests}
## Questions
    ${response.questions};`


    fs.writeFile('readmet.md', file, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

  })

// function to write README file


// function to initialize program
// function init() {

// };

// // function call to initialize program
// init();
