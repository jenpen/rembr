var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/rembr");

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

// var UserSchema = new Schema (
//   {
//     memory: [{type: ObjectId, ref: "Memory"}]
//   }
// );

// UserSchema.virtual("id").get(function(){
//   return this._id;
// });

var MemorySchema = new Schema (
  {
    title: String,
    longitude: Number,
    latitude: Number,
    date: { type: Date, default: Date.now },
    text: String,
    // user: {type: ObjectId, ref: "User"}
  },
  {
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
  }
);

var MemoryModel = mongoose.model("Memory", MemorySchema);
// var UserModel = mongoose.model("User", UserSchema);
