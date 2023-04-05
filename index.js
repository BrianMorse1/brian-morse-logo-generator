// required imports (files and modules)
const inquirer = require('inquirer');
const fs = require("fs");
const shapes = require("./lib/shapes.js");
import { triangleTemplate, circleTemplate, squareTemplate } from './lib/shapes.js';

//function for taking user input and assigning the data to a variable to be used later.
let answers;

const input =async () => {
    return await inquirer
      .prompt([
        {
          type: "input",
          name: "letters",
          message: "Enter three letters:",
          //validates that only three letters are returned
          validate: function (input) {
            return input.match(/[a-z]{3}/i)
              ? true
              : "Please enter three letters.";
          },
        },
        {
          type: "list",
          name: "shape",
          message: "Choose a shape:",
          choices: ["circle", "triangle", "square"],
        },
        {
          type: "input",
          name: "background",
          message: "Enter a color keyword or hex number for the background:",
        },
        {
          type: "input",
          name: "textColor",
          message: "Enter a color keyword or hex number for the text:",         
        },
        {
          type: "input",
          name: "shapeColor",
          message: "Enter a color keyword or hex number for the shape:",
        },
      ])
      .then((answers) => {
        return answers;
    });
  };
  




//function containing the logo template and function to write the file
const generateLogo = async () => {
    answers = await input();
// variables for user input
    const letters = answers.letters;
    const shape = answers.shape;
    const backgroundColor = answers.background;
    const textColor = answers.textColor;
    const shapeColor = answers.shapeColor;
//conditional statement for shape selection
    if (shape === "triangle") {
        fs.writeFile("logo.svg", shapes.triangleTemplate(
            letters, backgroundColor, textColor, shapeColor
        ));
        } else if (shape === "square") {
            fs.writeFile("logo.svg", shapes.squareTemplate(
                letters, backgroundColor, textColor, shapeColor
            ));
            } else if (shape === "circle") {
                fs.writeFile("logo.svg", shapes.circleTemplate(
                    letters, backgroundColor, textColor, shapeColor
                    ));
    }
};

//calls functions
generateLogo();
