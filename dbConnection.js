// node scripts.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Lolking',
  database: 'Module12'
});

function allDepartments() {
  
  let allDept = connection.query(
    'SELECT * FROM `department`',
    function (err, results, fields) {
      console.log('this is line 16', results)
      // return results
      return results
      // console.log(results)
  })
  console.log('this is line 21', allDept)
  return allDept
}

module.exports = { allDepartments: allDepartments };
// simple query
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

// // with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );