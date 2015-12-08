// Dependencies
var perspectiveModel = require("../models/perspective");
var api_key = require('../config/env.js');

var perspectivesController = {

  error: function (res, message){
    res.status(500);
    res.json({error: message});
  },

  index: function(req,res){
      perspectiveModel.find({},function(err, perspectives){
      console.log(perspectives);
      res.render("index",{perspectives: perspectives, api_key: api_key.api_key});
      // res.json(perspectives)
    });
  },

  create: function(req,res){
    new PerspectiveModel({title: req.body.title, content: req.body.title}).save(function(err, perspective){
      res.json(perspectives);
    });
  },

  all: function(req,res){
    perspectiveModel.find({}).populate("user", "email").then(function(perspective){
      console.log(perspective);
      res.json(perspective);
    });
  }

};

module.exports = perspectivesController;

// var express = require("express");
// var router = express.Router();
// var User = require("../models/user");
// var Perspective = require("../models/perspective");
//
// function error(response, message){
//   response.status(500);
//   response.json({error: message})
// }
//
// router.get("/", function(req, res){
//   Perspective.find({}).populate("user", "email").then(function(perspective){
//     res.json(perspective);
//   });
// });
//
// router.get("/:id", function(req, res){
//   Perspective.findById(req.params.id).populate("user", "email").then(function(perspective){
//     res.json(perspective);
//   });
// });
//
// router.put("/:id", function(req, res){
//   Perspective.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}).then(function(perspective){
//     res.json(perspective);
//   });
// });
//
// router.delete("/:id", function(req, res){
//   Perspective.findById(req.params.id).then(function(song){
//     User.findByIdAndUpdate(perspective.user._id, {
//       $pull: { perspectives: {_id: req.params.id} }
//     }).then(function(){
//       return perspective.remove();
//     }).then(function(){
//       res.json({success: true});
//     })
//   });
// });
//
// module.exports = router;
