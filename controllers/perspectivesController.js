// Dependencies
var perspective = require("../models/perspective");
var api_key = require('../env.js');
var user = require('../models/user')
require('../public/js/models/perspective.js')
var perspectivesController = {

  error: function (res, message){
    res.status(500);
    res.json({error: message});
  },

  index: function(req,res){
      perspective.find({},function(err, perspectives){
      res.render("index",{perspectives: perspectives, api_key: api_key});
      // res.json(perspectives)
    });
  },
  
  create: function(req,res){
    var currentUser = req.user.local

    currentUser.perspectives.push(newPerspective = new perspective({title: req.body.title, text: req.body.text, latitude: req.body.latitude, longitude: req.body.longitude}))
    currentUser.save(function(err){
      if (!err){
      console.log("Saved")
    }
    else{
      console.log(err)
    }
   })
     newPerspective.save(function(err){
       if(err){
         console.log(err)
       }
       else{
         console.log("Saved")

         res.redirect("/")
      }
     })

  },
  // update: function(req, res){
  //     perspective.findById(req.params.id, function(err, perspective){
  //     perspective.title = req.body.title;
  //     perspective.text = req.body.text;
  //     perspective.date = req.body.date;
  //     perspective.longitude = req.body.longitude;
  //     perspective.latitude = req.body.latitude;
  //     perspective.save(function(err, perspective){
  //       res.json(perspective);
  //     });
  //   });
  // },

  all: function(req,res){
    perspective.find({}).populate("user", "email").then(function(perspective){
      res.json(perspective);
    });
  }

};

module.exports = perspectivesController;
