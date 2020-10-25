var fs = require('fs');
var inquirer = require("inquirer");
// array of questions for user
const questions = [];

function init() {
inquirer
  .prompt([
    {
        type: "input",
        message: "Please enter your Github user",
        name: "github"
      },
      {
        type: "input",
        message: "Please enter your email",
        name: "email"
      },
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
License under the [${response.license}License](LICENSE) 
## Contributing
${response.contributing}
## Tests
${response.tests}
## Questions
Contact information:<br>
https://github.com/${response.github}<br>
${response.email}<br>
${response.questions}`


    fs.writeFile('readmet.md', file, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

  })
}
// function to write README file

// // function call to initialize program
init();
