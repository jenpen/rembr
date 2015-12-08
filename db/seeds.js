require("./schema");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/rembr");

var UserModel = require("../models/user");
var PerspectiveModel = require("../models/perspective");

// var userData = require("./user_data");
// var perspectiveData = require("./perspective_data");
UserModel.remove({}, function(err){
 console.log(err);
});
PerspectiveModel.remove({}, function(err){
 console.log(err);
});

var userOne = new UserModel({
  local:{
  email: "two@two.com",
  password: "oneoneone",
}}
);

var userTwo = new UserModel({
  local:{
  email: "three@three.com",
  password: "oneoneone",
}}
);


var mem1 = new PerspectiveModel({
  title: "mem1",
  latitude: 38.90439,
  longitude: -77.04317,
  text:"No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother."
});

var mem2 = new PerspectiveModel({
  title: "mem2",
  latitude: 38.92817,
  longitude: -77.03184,
  text:"Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother."
});

var mem3 = new PerspectiveModel({
  title: "mem3",
  latitude: 38.8909,
  longitude: -77.05313,
  text:"No! The cat shelter's on to me. For one beautiful night I knew what it was like to be a grandmother."
});

var mem4 = new PerspectiveModel({
  title: "mem4",
  latitude: 38.89891,
  longitude: -77.01777777777,
  text:"For one beautiful night I knew what it was like to be a grandmother."
})
var users = [userOne, userTwo];
var perspectives = [mem1, mem2, mem3, mem4];

for(var i = 0; i < users.length; i++) {
  users[i].local.perspectives.push(perspectives[i], perspectives[i+2]);

  users[i].save(function(err) {
    if (err){
      console.log(err);
    } else {
      console.log("user was saved");
    }
  })


}
for(var i=0; i<perspectives.length; i++){
perspectives[i].save(function(err) {
  if (err){
    console.log(err);
  } else {
    console.log("Perspective was saved");
  }
});
}
// mem1.save(function(err, docs){
//   console.log("Perspective was saved")
//   console.log(docs);
// });
// var mem2 = new PerspectiveModel("mem2", {}, 2, 2,  "No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother.");
// mem2.save(function(err){
//   console.log("Perspective was saved");
// });
// var mem3 = new PerspectiveModel("mem3", {}, 3, 3,  "No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother.");
// mem3.save(function(err){
//   console.log("Perspective was saved");
// });
// var mem4 = new PerspectiveModel("mem4", {}, 4, 4,  "No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother.");
// mem4.save(function(err){
//   console.log("Perspective was saved");
// });
// var mem5 = new PerspectiveModel("mem5", {}, 5, 5,  "No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother.");
// mem5.save(function(err){
//   console.log("Perspective was saved");
// });
// var mem6 = new PerspectiveModel("mem6", {}, 6, 6,  "No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother.");
// mem6.save(function(err){
//   console.log("Perspective was saved");
// });
// var mem7 = new PerspectiveModel("mem7", {}, 7, 7,  "No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother.");
// mem7.save(function(err){
//   console.log("Perspective was saved");
//
// })
//
//
// console.log("this is happening after async saves")
// // Seed structure example to use with json file
// // db.on("error", function(err){
// //   console.log("Oops! Mongo threw an error.No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother. Is `mongod` running?");
// //   console.log(err.message);
// //   process.exit();
// // });
// //
// // db.once("open", function(){
// //   console.log("Connected to the database.");
// //   var user = require("../models/user");
// //   var perspective = require("../models/perspective");
// //
// //   perspective.remove({}).then(function(){
// //     user.remove({}).then(function(){
// //       forEach(userData, function(userDatum){
// //         return new user(userDatum).save().then(function(user){
// //           return forEach(perspectiveData[user.name], function(perspectiveDatum){
// //             perspective = new perspective(perspectiveDatum);
// //             console.log(user.name + " rembrs " + perspective.title);
// //             perspective.user = user;
// //             return perspective.save().then(function(perspective){
// //               user.perspectives.push(perspective);
// //               user.save();
// //             });
// //           })
// //         });
// //       }).then(function(){
// //         process.exit();
// //       });
// //     });
// //   });
// //
// // });
// //
// // function forEach(collection, callback, index){
// //   if(!index) index = 0;
// //   return callback(collection[index]).then(function(){
// //     if(collection[index + 1]) return forEach(collection, callback, index + 1);
// //   });
// // }
