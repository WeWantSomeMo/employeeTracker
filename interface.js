// const inquirer = require('inquirer');
// import { allDepartments } from './dbConnection.js'
import inquirer from 'inquirer'
import { allDepartments, allRoles, allEmployees } from './dbConnection.js';

inquirer
  .prompt([
    {
      name: 'department',
      message: 'Do you want to see all department info?'
    },
  ])
  .then(async answers => {
    console.table(await allRoles());
  });