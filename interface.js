import inquirer from 'inquirer'
import { allTableData, addDepartmentToData, addNewEmployee, updateEmployee } from './dbConnection.js';



function captureNewDepartmentEntry() {
   inquirer.prompt([
        {
            type:'input',
            name: 'newEntry',
            message: 'type new department name'
        }
    ]) .then(async answer => {
       console.log(await addDepartmentToData(answer.newEntry))
    })
}

async function getAllRoles() {
    let response = await allTableData('role')
    return response.map(item => ({ value: item.id, name: item.title}))
}

async function getAllEmployees() {
    let response = await allTableData('employee')
    return response.map(item => ({ value: item.id, name: `${item.first_name} ${item.last_name}`}))
}



function captureNewEmployee(){
    inquirer.prompt([
        {
            type:'input',
            name: 'first_name',
            message: 'type the new empoyee`s first name',
        },
        {
            type:'input',
            name: 'last_name',
            message: "type new empoyee`s last name",
        },
        {
            type:'list',
            name: 'role_id',
            message: 'select employer role',
            choices: getAllRoles
        },
        {
            type:'list',
            name: 'manager_id',
            message: 'select manager',
            choices: getAllEmployees
        }
    ]) .then(async answer =>{
        console.log(await addNewEmployee(answer))
    })
  
}

function captureUpdateEmployeeRole(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'edit_employee_id',
            message: 'select employee to update', 
            choices: getAllEmployees
         },
        {
            type:'list',
            name: 'edit_role_id',
            message: 'select employee`s new role',
            choices: getAllRoles
        }, 
    ]) .then(async answer =>{
        console.log(await updateEmployee(answer))
    })
}

inquirer
  .prompt([
    {
        type: "list",
        name: 'userSelection',
        message: 'Select from the choices below:', 
        choices: [
            {name: "View all Departments", value: {type:'viewAll', table:'department'}},
            {name: "View all Roles", value: {type:'viewAll', table:'role'}},
            {name: "View all Employees", value: {type:'viewAll', table:'employee'}},
            new inquirer.Separator(),
            {name: "Add a New Department", value: {type:'addDepartment', table:'department'}},
            {name: "Add a New Employee", value: {type:'addEmployee', table:'employee'}},
            {name: "Update an existing Employee Role", value: {type:'updateEmployee', table:'employee'}},
          ] 
    }
  ]) .then(async answer => {
      if (answer.userSelection.type === 'viewAll'){
        console.table(await allTableData(answer.userSelection.table))
      } else if (answer.userSelection.type === 'addDepartment'){
         captureNewDepartmentEntry()
      } else if (answer.userSelection.type ==='addEmployee'){
          captureNewEmployee()
      } else if (answer.userSelection.type === 'updateEmployee'){
          captureUpdateEmployeeRole()
      }
  })