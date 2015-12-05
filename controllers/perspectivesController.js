var PerspectiveModel = require("../models/perspective");

var env = require('../config/env.js');


var perspectivesController = {
  index: function(req,res){
    PerspectiveModel.find({},function(err, perspectives){
      console.log(perspectives);
    res.render("index",{perspectives: perspectives});
  });
  }
};
module.exports = perspectivesController;
