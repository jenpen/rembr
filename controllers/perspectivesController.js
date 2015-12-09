// Dependencies
var perspective = require("../models/perspective");
var api_key = require('../env.js');
var user = require('../models/user')

var perspectivesController = {

  error: function (res, message){
    res.status(500);
    res.json({error: message});
  },

  index: function(req,res){
      perspective.find({},function(err, perspectives){
      res.render("index",{perspectives: perspectives, api_key: api_key});
      // res.json(perspectives)
    });
  },
  create: function(req,res){
    // console.log("this is triggered")
    // console.log(req.body.title)
    // console.log(req.body.text)
    // console.log(req.body.latitude)
    // console.log(req.body.longitude)
    // console.log(req.user.local.perspectives)
    var currentUser = req.user.local
    console.log(currentUser)
    console.log(currentUser.perspectives);

    currentUser.perspectives.push(newPerspective = new perspective({title: req.body.title, text: req.body.text, latitude: req.body.latitude, longitude: req.body.longitude}))
    currentUser.save(function(err){
      if (!err){
      console.log("******************************")
      console.log("save should be successful")
      console.log(currentUser.perspectives[0])
    }
    else{
      console.log(err)
    }
   })

    //  var newPerspective = new perspective({title: req.body.title, text: req.body.text, latitude: req.body.latitude, longitude: req.body.longitude})
     newPerspective.save(function(err){
       if(err){
         console.log(err)
       }
       else{
         console.log("success?")
         console.log(currentUser.perspectives)
       }
     })
    //  currentUser.perspectives[i].save(function(err){
    //    if(err){
    //      console.log(err)
    //    }
    //    else {
    //      console.log("successful")
    //    }
    //  })
  //  currentUser.perspectives.forEach(function(perspective){
  //    console.log(perspective[per])
  //    perspective.save(function(){
  //      console.log("saved?!")
  //    })
  //  })


    // user.findById(req.params.id, function(err, user) {
    //   var perspective = new PerspectiveModel({
    //     title: req.body.title,
    //     text: req.body.text,
    //     date: req.body.date,
    //     longitude: req.body.longitude,
    //     latitude: req.body.latitude
    //   }).save(function(err, perspective){
    //     res.json(perspectives);
    //   });
    // });
  },
  update: function(req, res){
    perspective.findById(req.params.id, function(err, perspective){
      perspective.title = req.body.title;
      perspective.text = req.body.text;
      perspective.date = req.body.date;
      perspective.longitude = req.body.longitude;
      perspective.latitude = req.body.latitude;
      perspective.save(function(err, perspective){
        res.json(perspective);
      });
    });
  },

  all: function(req,res){
    perspective.find({}).populate("user", "email").then(function(perspective){
      res.json(perspective);
    });
  }

};

module.exports = perspectivesController;

// var express = require("express");
// var router = express.Router();
// var User = require("../models/user");
// var Perspective = require("../models/perspective");
//
// function error(response, message){
//   response.status(500);
//   response.json({error: message})
// }
//
// router.get("/", function(req, res){
//   Perspective.find({}).populate("user", "email").then(function(perspective){
//     res.json(perspective);
//   });
// });
//
// router.get("/:id", function(req, res){
//   Perspective.findById(req.params.id).populate("user", "email").then(function(perspective){
//     res.json(perspective);
//   });
// });
//
// router.put("/:id", function(req, res){
//   Perspective.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}).then(function(perspective){
//     res.json(perspective);
//   });
// });
//
// router.delete("/:id", function(req, res){
//   Perspective.findById(req.params.id).then(function(song){
//     User.findByIdAndUpdate(perspective.user._id, {
//       $pull: { perspectives: {_id: req.params.id} }
//     }).then(function(){
//       return perspective.remove();
//     }).then(function(){
//       res.json({success: true});
//     })
//   });
// });
//
// module.exports = router;
