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
    })
  },

  all: function(req,res){
    perspectiveModel.find({}).populate("user", "email").then(function(perspective){
      res.json(perspective)
    })
  }

};

module.exports = perspectivesController;
