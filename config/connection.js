var mysql = require("mysql");
var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("Error connecting " + err.stack);
        return;
    }
    console.log("Connected as Database ID " + connection.threadID);
});

//Export the MySQL Function
module.exports = connection;