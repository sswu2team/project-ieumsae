var mysql = require("mysql2");
var database_info = {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "4151561",
    database: "ieumsae",
};

var database = mysql.createConnection(database_info);

database.connect((err) => {
    if (err) {
      console.error('MySQL 데이터베이스와 connect 되지 않음: ', err);
      return;
    }
    console.log('MySQL 데이터베이스와 connect 됨');
  });

module.exports = database;