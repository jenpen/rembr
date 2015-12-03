var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose")
var memoriesController = require("./controllers/memoriesController")
app.set("view engine", "hbs")
var conn = mongoose.connect("mongodb://localhost/rembr")


app.use(express.static(path.join(__dirname,"/public")));
app.use(bodyParser.json());

app.listen(7812,function(){
  console.log("Listening on port 7812");
});

app.get("/memories", memoriesController.index)
