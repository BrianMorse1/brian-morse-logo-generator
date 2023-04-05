const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'input',
    name: 'letters',
    message: 'Enter three letters:',
    validate: function(input) {
      // check using regular expressions that ensures that three letters are received
      return input.match(/[a-z]{3}/i) ? true : 'Please enter three letters.';
    }
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'background',
    message: 'Enter a color keyword or hex number for the background:',
    validate: function(input) {
      // check that input is a valid color keyword or hex number
      return input.match(/^#([0-9a-f]{3}){1,2}$/i) || ['red', 'blue', 'green'].includes(input) ? true : 'Please enter a valid color keyword or hex number.';
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color keyword or hex number for the text:',
    validate: function(input) {
      // check that input is a valid color keyword or hex number
      return input.match(/^#([0-9a-f]{3}){1,2}$/i) || ['red', 'blue', 'green'].includes(input) ? true : 'Please enter a valid color keyword or hex number.';
    }
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color keyword or hex number for the shape:',
    validate: function(input) {
      // check that input is a valid color keyword or hex number
      return input.match(/^#([0-9a-f]{3}){1,2}$/i) || ['red', 'blue', 'green'].includes(input) ? true : 'Please enter a valid color keyword or hex number.';
    }
  }
]);


