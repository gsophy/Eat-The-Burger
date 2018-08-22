//Load Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var router = require("./controllers/controller.js");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + public));
app.use("/", router);

app.listen(PORT, function () {
    console.log("Server is listening on port " + PORT);
});