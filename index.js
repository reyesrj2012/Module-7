import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "What is the description of your project?"
        },
        {
            type: "list",
            name: "license",
            message: "Which license do you want to use for your project?",
            choices: [
                "MIT",
                "Apache 2.0"
            ]
        }
        {
            type: "input",
            name: "Installation",
            message: "What do I need to install?"
        },
        {
            type: "input",
            name: "Usage",
            message: "What will the project be used for?"
        },
        {
            type: "input",
            name: "Contributing",
            message: "Who are the contributers?"
        },
    ])

    .then((data) => {
        // Use user feedback for... whatever!!
        // console.log(data)


        const template = generateMarkdown(data)

        // console.log(template)

        fs.writeFile("./output/README.md", template, function () {
            console.log("README has been created!")
        })


    })
