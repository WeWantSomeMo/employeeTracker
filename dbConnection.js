import mysql2 from 'mysql2';

const mysql = mysql2

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Lolking',
  database: 'Module12'
});

export function allTableData(table) {
  return connection.promise().query(`SELECT * FROM ${table}`)
  .then(([rows, fields]) =>{
    return rows
  });
}

export function addDepartmentToData(newDepartment) {
  return connection.promise().query(
    'INSERT INTO department(name) VALUES (?)',
    [newDepartment]
  ).then( () => {
    return `${newDepartment} is now created!`
  })
}

export function addNewEmployee(employee){
  return connection.promise().query(
    'INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)',
    [employee.first_name, employee.last_name, employee.role_id, employee.manager_id]
  ).then( () => {
    return `${employee.first_name} ${employee.last_name} is created!`
  })
}

export function updateEmployee(employee){
  return connection.promise().query(
    'UPDATE employee SET employee.role_id = ? WHERE id=?', 
    [employee.edit_role_id, employee.edit_employee_id]
  ).then( (results) => {
    return `update complete!`
  })
}