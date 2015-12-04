var mongoose = require("mongoose");
var bcrypt   = require('bcrypt-nodejs');


var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;


var UserSchema = new Schema(
  {
    email: String,
    password: String,
    memories: [{type: ObjectId, ref: "Memory"}]
  }
)

var MemorySchema = new Schema (
  {
    title: String,
    longitude: Number,
    latitude: Number,
    date: { type: Date, default: Date.now },
    text: String,
    user: {type: ObjectId, ref: "User"}
  },
  {
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
  }
);

var MemoryModel = mongoose.model("Memory", MemorySchema);
var UserModel = mongoose.model("User", UserSchema);
