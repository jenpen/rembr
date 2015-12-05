var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

var mongoose = require("mongoose");
var perspectivesController = require("./controllers/perspectivesController");

var passport     = require('passport');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var usersController = require("./controllers/usersController");
app.set("view engine", "hbs");
var conn = mongoose.connect("mongodb://localhost/rembr");
var env          =require("./config/env.js");



app.use(express.static(path.join(__dirname,"/public")));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cookieParser());

app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
  });

app.listen(7812,function(){
  console.log("Listening on port 7812");
});

app.get("/", perspectivesController.index);
app.get("/signup", usersController.getSignup);
app.post("/signup", usersController.postSignup);
