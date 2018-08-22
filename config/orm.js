//Define the dependencies
var connection = require("/.connection.js");

var orm = {
    selectAll: function(tableInput, callback) {
        var queryString = "select * from ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) {
                throw err;
        }
        callback(result);
    });
},
    insertOne: function (tableInput, callback) {
        var queryString = "insert into ?? (??) values (?)";
        connection.query(queryString [tableInput, columnName, burgerName], function (err, result) {
            if (err) {
                throw err;
            }
            callbck(result);
    });
},
    updateOne: function (tableInput, updateColumnName, updateRowVal, searchColName, searchRowVal, callback) {
        var queryString = "update ?? set ?? = ? where ?? = ?";
        connection.query(queryString, [tableInput, updateColumnName, updateRowVal, searchColName, searchRowVal], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

//Export ORM
module.exports = orm;