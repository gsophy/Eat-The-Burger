//Load Dependencies
var express = require("express");
var router = express.router;
var burger = require("../models/models.js");

//Create a route to grab the contents of the database
router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers:data
        };
        res.render("index", hbsObject);
    });
});
router.post("/", function (req, res) {
    if (req.body.burger_name !== "") {
        burger.insertOne(req.body.name.trim(), function () {
            res.redirect("/");
        });
    };
});

router.put ("/:id", function (req, res) {
    console.log(req.params.id);
        burger.updateOne (req.params.id, function () {
            res.redirect("/");
        });
});

module.exports = router;

