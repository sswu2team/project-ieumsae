var mysql = require("mysql2");
var db_info = {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "921204",
    database: "ieumsae",
};

var db = mysql.createConnection(db_info);
db.connect();

module.exports = db;