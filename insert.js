var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2010rockS',
  database: 'Productivity'
});

connection.connect();

// populate the table if there are any values

// user will type the task item in whichever day
// once the user the presses enter key, jquery will get
// the input value and the day it was called in and it will add
// it into the database


var todo = {
  username: 'Humethazine',
  name: 'Hiumathy',
  email: 'hiumathy.learn@gmail.com',
  password: 'password'
}


var lists1 = {
  taskItem: 'Read for an hour',
  day: 'Monday',
  userID: 1
}

var lists2 = {
  taskItem: 'Learn french for 30 minutes',
  day: 'Monday',
  userID: 1
}

var lists3 = {
  taskItem: 'Practice blah blah blah',
  day: 'Monday',
  userID: 1
}

var lists = [lists1, lists2, lists3];

var query = connection.query('insert into users set ?', todo, function (err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(query.sql);
});

for (var i=0; i<lists.length; i++) {
  var query = connection.query('insert into tasks set ?', lists[i], function (err, result) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(query.sql);
  });

}
