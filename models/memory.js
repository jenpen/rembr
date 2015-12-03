require("../db/schema");
var mongoose = require("mongoose");
var MemoryModel = mongoose.model("Memory");

module.exports = MemoryModel;
