CREATE TABLE users (
  userID INT PRIMARY KEY AUTO_INCREMENT,
  username TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  password VARCHAR(40) NOT NULL
);

CREATE TABLE tasks (
  taskID INT PRIMARY KEY AUTO_INCREMENT,
  taskItem TEXT,
  day TEXT NOT NULL,
  userID INT,
  FOREIGN KEY (userID) REFERENCES users(userID)
);