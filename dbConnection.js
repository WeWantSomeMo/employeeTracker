// node scripts.js
// const mysql = require('mysql2');
import mysql2 from 'mysql2';
// import {pw} from './secrets.js'

const mysql = mysql2

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Lolking',
  database: 'Module12'
});

export function allDepartments() {
  return connection.promise().query('SELECT * FROM department')
  .then(([rows, fields]) =>{
    return rows
  });
}

export function allRoles(){
  return connection.promise().query('SELECT * FROM role')
  .then(([rows, fields]) =>{
    return rows
  });
}

export function allEmployees(){
  return connection.promise().query('SELECT * FROM employee')
  .then(([rows, fields]) => {
    return rows
  });
}
