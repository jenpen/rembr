var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var hbs          = require("hbs");
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var methodOverride = require('method-override');
var perspectivesController = require('./controllers/perspectivesController');
var usersController = require('./controllers/usersController');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/rembr'); // NHO: Is this line necessary both here and in db/seeds.js?

// Middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.set('view engine', 'hbs');
app.set("views","./views");
app.use(express.static(__dirname + '/public'));

// NHO: We could use env variables to hide senesitive info here
app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(methodOverride('_method'));

require('./config/passport')(passport);

// Set Current User
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

// Set Port
var port = process.env.PORT || 7812;
app.listen(port, function() {
  console.log('Node app is running on port', app.get('port'));
});

// Perspective Routes
app.get("/", perspectivesController.index);
app.delete("/perspectives/:id", perspectivesController.delete)
app.get("/perspectives", perspectivesController.all);
app.post("/", perspectivesController.create);
app.get("/perspectives/:id", perspectivesController.show)
// NHO: What about a route, and controller action to update?
// app.delete("/user/:userId/perspectives/:id", perspectivesController.removeReminder); NHO: Remove unused/commented out code


// User Routes
app.get("/signup", usersController.getSignup);
app.post("/signup", usersController.postSignup);
app.get("/login", usersController.getLogin);
app.post("/login", usersController.postLogin);
app.get("/logout", usersController.getLogout);
// app.get("/users", usersController.index); NHO: Remove unused/commented out code

function authenticatedUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  if (req.isAuthenticated()) return next();

  // Otherwise the req is always redirected to the home page
  res.redirect('/');
}
