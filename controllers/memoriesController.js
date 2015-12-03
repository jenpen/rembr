var MemoryModel = require("../models/memory")

var memoriesController = {
  index: function(req,res){
    MemoryModel.find({},function(err, memories){
    res.render("index",{memories: memories})
    })
  }
}
module.exports = memoriesController;
