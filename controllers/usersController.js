// Dependencies
var passport = require("passport")
var userModel = require("../models/user.js")


var usersController = {

  // GET /signup
  getSignup: function(req, res) {
    res.render("signup.hbs", { message: req.flash('signupMessage') });
  },

  // POST /signup
  postSignup: function(req, res) {
    var signupStrategy = passport.authenticate('local-signup', {
      successRedirect : '/',
      failureRedirect : '/signup',
      failureFlash : true
    });
    return signupStrategy(req, res);
  },

  // GET /login
  getLogin: function(req, res) {
    res.render('login.hbs', { message: req.flash('loginMessage') });
  },

  // POST /login
  postLogin: function(req, res) {
    var loginProperty = passport.authenticate('local-login', {
      successRedirect : '/',
      failureRedirect : '/login',
      failureFlash : true
    });
    return loginProperty(req, res);
  },

  // GET /logout
  getLogout: function(req, res) {
    req.logout();
    res.redirect('/');
  },

  index: function(req,res){
    userModel.find({}).then(function(users){
      console.log(users)
      res.json(users);
    })
  }
};

module.exports = usersController;
