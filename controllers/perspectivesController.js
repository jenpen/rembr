var PerspectiveModel = require("../models/perspective")

var api_key = require('../config/env.js')

var perspectivesController = {
  index: function(req,res){
    PerspectiveModel.find({},function(err, perspectives){

      console.log(perspectives)
    res.render("index",{perspectives: perspectives, api_key: api_key.api_key})
    })
  }
}

module.exports = perspectivesController;
