var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2010rockS',
  database: 'Productivity'
});

connection.connect();

var query = connection.query("select * from users", function(err, result) {
  console.log(result);
});

var query = connection.query("select * from tasks", function(err, result) {
  console.log(result);
});
