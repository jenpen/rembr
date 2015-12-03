var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
mongoose.connect("mongodb://localhost/rembr");


app.use(express.static(path.join(__dirname,"/public")));
app.use(bodyParser.json());

app.listen(7812,function(){
  console.log("Listening on port 3000");
});

app.get("/", function(req, res){
  res.send("Hello World")
});
