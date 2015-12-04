require("./schema");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/rembr");
var MemoryModel = require("../models/memory");
// var UserModel = require("../models/user");
// var userData = require("./user_data");
// var memoryData = require("./memory_data");


var userOne = new UserModel({
  email: "one@one.com",
  password: "oneoneone",
});

var userTwo = new UserModel({
  email: "one@one.com",
  password: "oneoneone",
});

var mem1 = new MemoryModel({
  title: "mem1",
  latitude: 1,
  longitude: 1,
  text:"No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother."
});

var mem2 = new MemoryModel({
  title: "mem2",
  latitude: 2,
  longitude: 2,
  text:"Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother."
});

var mem3 = new MemoryModel({
  title: "mem3",
  latitude: 3,
  longitude: 3,
  text:"No! The cat shelter's on to me. For one beautiful night I knew what it was like to be a grandmother."
});

var mem4 = new MemoryModel({
  title: "mem4",
  latitude: 4,
  longitude: 4,
  text:"For one beautiful night I knew what it was like to be a grandmother."
});

var users = [userOne, userTwo];
var memories = [mem1, mem2, mem3, mem4];

for(var i = 0; i < users.length; i++) {
  users[i].memories.push(memories[i], memories[i+2]);

  users[i].save(function(err) {
    if (err){
      console.log(err);
    } else {
      console.log("user was saved");
    }
  })
}
// mem1.save(function(err, docs){
//   console.log("Memory was saved")
//   console.log(docs);
// });
// var mem2 = new MemoryModel("mem2", {}, 2, 2,  "No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother.");
// mem2.save(function(err){
//   console.log("Memory was saved");
// });
// var mem3 = new MemoryModel("mem3", {}, 3, 3,  "No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother.");
// mem3.save(function(err){
//   console.log("Memory was saved");
// });
// var mem4 = new MemoryModel("mem4", {}, 4, 4,  "No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother.");
// mem4.save(function(err){
//   console.log("Memory was saved");
// });
// var mem5 = new MemoryModel("mem5", {}, 5, 5,  "No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother.");
// mem5.save(function(err){
//   console.log("Memory was saved");
// });
// var mem6 = new MemoryModel("mem6", {}, 6, 6,  "No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother.");
// mem6.save(function(err){
//   console.log("Memory was saved");
// });
// var mem7 = new MemoryModel("mem7", {}, 7, 7,  "No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother.");
// mem7.save(function(err){
//   console.log("Memory was saved");
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
// //   var memory = require("../models/memory");
// //
// //   memory.remove({}).then(function(){
// //     user.remove({}).then(function(){
// //       forEach(userData, function(userDatum){
// //         return new user(userDatum).save().then(function(user){
// //           return forEach(memoryData[user.name], function(memoryDatum){
// //             memory = new memory(memoryDatum);
// //             console.log(user.name + " rembrs " + memory.title);
// //             memory.user = user;
// //             return memory.save().then(function(memory){
// //               user.memorys.push(memory);
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
