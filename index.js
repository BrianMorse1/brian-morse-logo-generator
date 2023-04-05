// required imports (files and modules)
const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes.js");

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
          validate: function (input) {
            return input.match(/^#([0-9a-f]{3}){1,2}$/i) ||
              ["red", "blue", "green"].includes(input)
              ? true
              : "Please enter a valid color keyword or hex number.";
          },
        },
        {
          type: "input",
          name: "textColor",
          message: "Enter a color keyword or hex number for the text:",
          validate: function (input) {
            return input.match(/^#([0-9a-f]{3}){1,2}$/i) ||
              ["red", "blue", "green"].includes(input)
              ? true
              : "Please enter a valid color keyword or hex number.";
          },
        },
        {
          type: "input",
          name: "shapeColor",
          message: "Enter a color keyword or hex number for the shape:",
          validate: function (input) {
            return input.match(/^#([0-9a-f]{3}){1,2}$/i) ||
              ["red", "blue", "green"].includes(input)
              ? true
              : "Please enter a valid color keyword or hex number.";
          },
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
        fs.writeFile("triangel.html", shapes.triangleTemplate(
            letters, backgroundColor, textColor, shapeColor
        ));
        } else if (shape === "square") {
            fs.writeFile("square.html", shapes.squareTemplate(
                letters, backgroundColor, textColor, shapeColor
            ));
            } else if (shape === "circle") {
                fs.writeFile("circle.html", shapes.circleTemplate(
                    letters, backgroundColor, textColor, shapeColor
                    ));
    }
};

//calls functions
generateLogo();
