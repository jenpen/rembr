var mongoose = require("mongoose");
mongoose.connect("mongod://localhost/rembr");

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var UserSchema = new Schema (
  {
    memory: [{type: ObjectId, ref: "Memory"}]
  }
);

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
