// Dependencies
var perspective = require("../models/perspective");
var api_key = require('../env.js');
var user = require('../models/user');
require('../public/js/models/perspective.js');

var perspectivesController = {
  error: function (res, message){
    res.status(500);
    res.json({error: message});
  },
  index: function(req,res){
    perspective.find({},function(err, perspectives){
      res.render("index", {perspectives: perspectives, key: api_key});
    });
  },
  create: function(req,res){
    var currentUser = req.user.local;
    currentUser.perspectives.push(
      newPerspective = new perspective({
        title: req.body.title,
        text: req.body.text,
        latitude: req.body.latitude,
        longitude: req.body.longitude}));
        currentUser.save(function(err){
          if (!err){
            console.log("Saved");
          } else {
            console.log(err);
          }
        });
        newPerspective.save(function(err){
          if(err){
            console.log(err);
          } else {
            console.log("Saved");
            res.redirect("/");
          }
        });
      },

      show: function(req,res){
        perspective.findById(req.params.id).then(function(perspective){
          res.json(perspective);
        });
      },

      delete: function(req,res){
        //find the record given an id
        perspective.findOne({_id:req.params.id},function(err,p){
          if(!err){
            p.remove().then(function(){
              res.json({success: true});
            });
          }
          else{
            console.log(err);
          }
        });
      },

      all: function(req,res){
        perspective.find({}).populate("user", "email").then(function(perspective){
          res.json(perspective);
        });
      }
    };

    module.exports = perspectivesController;
