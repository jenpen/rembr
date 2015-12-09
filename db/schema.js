var mongoose = require("mongoose");
var bcrypt   = require('bcrypt-nodejs');


var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var PerspectiveSchema = new Schema (
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

var PerspectiveModel = mongoose.model("Perspective", PerspectiveSchema);
