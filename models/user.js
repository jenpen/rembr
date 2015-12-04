require("../db/schema");
var mongoose = require("mongoose");
var UserModel = mongoose.model("User");

UserModel.encrypt = function(password) {
   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
 };

 UserModel.validPassword = function(password) {
     return bcrypt.compareSync(password, this.local.password);
  };

module.exports = mongoose.model('User', UserModel);
