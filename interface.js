const inquirer = require('inquirer');
const { allDepartments } =  require('./dbConnection');

inquirer
  .prompt([
    {
      name: 'faveReptile',
      message: 'What is your favorite reptile?'
    },
  ])
  .then(answers => {
    console.info('Answer:', allDepartments());
  });


