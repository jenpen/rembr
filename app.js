var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var hbs   = require("hbs");
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var perspectivesController = require('./controllers/perspectivesController');
var usersController = require('./controllers/usersController');

mongoose.connect('mongodb://localhost/rembr');

// Middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.set('view engine', 'hbs');
app.set("views","./views");
app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);

// Set Current User
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});


app.listen(7812, function(){
  console.log("*** Listening on Port 7812 ***")
});

// Perspective Routes
app.get("/", perspectivesController.index);
app.get("/perspectives", perspectivesController.all);
app.post("/", perspectivesController.create);
// app.delete("/user/:userId/perspectives/:id", perspectivesController.removeReminder);

// User Routes
app.get("/signup", usersController.getSignup);
app.post("/signup", usersController.postSignup);
app.get("/login", usersController.getLogin);
app.post("/login", usersController.postLogin);
app.get("/logout", usersController.getLogout);
// app.get("/users", usersController.index);

function authenticatedUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  if (req.isAuthenticated()) return next();

  // Otherwise the req is always redirected to the home page
  res.redirect('/');
}
