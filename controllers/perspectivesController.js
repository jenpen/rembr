// Dependencies
var PerspectiveModel = require("../models/perspective");
var api_key = require('../config/env.js');

var perspectivesController = {

  error: function (res, message){
    res.status(500);
    res.json({error: message});
  },

  index: function(req,res){
    PerspectiveModel.find({},function(err, perspectives){
      console.log(perspectives);
      res.render("index",{perspectives: perspectives, api_key: api_key.api_key});
      // res.json(perspectives)
    });
  }




};

module.exports = perspectivesController;
