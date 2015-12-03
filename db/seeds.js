require("./schema");
var mongoose = require("mongoose");
var db = mongoose.connection;
var MemoryModel = require("../models/memory");
// var userData = require("./user_data");
// var memoryData = require("./memory_data");

var mem1 = new MemoryModel("mem1", {}, 1, 1,  "No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother.");
mem1.save(function(err){
  console.log("Memory was saved");
});
var mem2 = new MemoryModel("mem2", {}, 2, 2,  "No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother.");
mem2.save(function(err){
  console.log("Memory was saved");
});
var mem3 = new MemoryModel("mem3", {}, 3, 3,  "No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother.");
mem3.save(function(err){
  console.log("Memory was saved");
});
var mem4 = new MemoryModel("mem4", {}, 4, 4,  "No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother.");
mem4.save(function(err){
  console.log("Memory was saved");
});
var mem5 = new MemoryModel("mem5", {}, 5, 5,  "No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother.");
mem5.save(function(err){
  console.log("Memory was saved");
});
var mem6 = new MemoryModel("mem6", {}, 6, 6,  "No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother.");
mem6.save(function(err){
  console.log("Memory was saved");
});
var mem7 = new MemoryModel("mem7", {}, 7, 7,  "No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother.");
mem7.save(function(err){
  console.log("Memory was saved");
});


// Seed structure example to use with json file
// db.on("error", function(err){
//   console.log("Oops! Mongo threw an error.No! The cat shelter's on to me. Robot 1-X, save my friends! And Zoidberg! For one beautiful night I knew what it was like to be a grandmother. Is `mongod` running?");
//   console.log(err.message);
//   process.exit();
// });
//
// db.once("open", function(){
//   console.log("Connected to the database.");
//   var user = require("../models/user");
//   var memory = require("../models/memory");
//
//   memory.remove({}).then(function(){
//     user.remove({}).then(function(){
//       forEach(userData, function(userDatum){
//         return new user(userDatum).save().then(function(user){
//           return forEach(memoryData[user.name], function(memoryDatum){
//             memory = new memory(memoryDatum);
//             console.log(user.name + " sings " + memory.title);
//             memory.user = user;
//             return memory.save().then(function(memory){
//               user.memorys.push(memory);
//               user.save();
//             });
//           })
//         });
//       }).then(function(){
//         process.exit();
//       });
//     });
//   });
//
// });
//
// function forEach(collection, callback, index){
//   if(!index) index = 0;
//   return callback(collection[index]).then(function(){
//     if(collection[index + 1]) return forEach(collection, callback, index + 1);
//   });
// }
