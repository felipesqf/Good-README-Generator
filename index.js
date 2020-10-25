let fs = require('fs');
let inquirer = require("inquirer");
// array of questions for user

init = () => {
inquirer
  .prompt([
    {
        type: "input",
        message: "Please enter your Name:",
        name: "name"
      },
    {
        type: "input",
        message: "Please enter your Github user:",
        name: "github"
      },
      {
        type: "input",
        message: "Please enter your email:",
        name: "email"
      },
    {
      type: "input",
      message: "Please enter the Project Title:",
      name: "title"
    },
    {
      type: "input",
      message: "Enter the Description:",
      name: "description"
    },
    {
      type: "input",
      message: "Enter Table of Contents:",
      name: "tableOfContents"
    },
    {
        type: "input",
        message: "Enter the Installation:",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter the Usage:",
        name: "usage"
    },
    {
        type: "list",
        message: "Enter the License:",
        name: "license",
        choices:["MIT", "Other"]
    },
    {
        type: "input",
        message: "Enter the Contributing information:",
        name: "contributing"
    },
    {
        type: "input",
        message: "Enter the Test information:",
        name: "tests"
    },
    {
        type: "input",
        message: "Questions:",
        name: "questions"
    }
  ])
  .then(function(response) {
    let file = 
    `# ${response.title}`
    
    + "\n\n" +
    `## Description
    ${response.description}`
    + "\n\n" + 

    `## Content
    ${response.tableOfContents}`
    + "\n\n" + 

    `## Instalation
    ${response.installation}`
    + "\n\n" + 

    `## Usage
    ${response.usage}`
    + "\n\n" + 

    `## License
    License under the [${response.license} License](LICENSE)` 
    + "\n\n" + 

    `## Contributing
    ${response.contributing}`
    + "\n\n" + 

    `## Tests
    ${response.tests}`
    + "\n\n" + 

    `## Questions
    ${response.name}<br>
    Contact information:<br>
    https://github.com/${response.github}<br>
    ${response.email}<br>
    ${response.questions}`

    fs.writeFile('generatedReadme.md', file, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

  })
}
// function to write README file

// // function call to initialize program
init();
