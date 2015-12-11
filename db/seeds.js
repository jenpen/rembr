require("./schema");
var mongoose = require("mongoose");
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/rembr');
var UserModel = require("../models/user");
var PerspectiveModel = require("../models/perspective");

// Remove all seed data
UserModel.remove({}, function(err){
  console.log(err);
});
PerspectiveModel.remove({}, function(err){
  console.log(err);
});

// User Seed Data
var forrest = new UserModel({
  local:{
    email: "forrest@gump.com",
    password: "oneoneone",
    username: "forestforestgump"
  }}
);

var dan = new UserModel({
  local:{
    email: "lieutenant@dan.com",
    password: "oneoneone",
    username: "dan_the_nam_man"
  }}
);

// Perspectives seed data
var spec1 = new PerspectiveModel({
  title: "President Lincoln's Face",
  latitude: 38.889274947317325,
  longitude: -77.0499837398529,
  text: "Someone once told me the back of Abraham Lincoln’s head of the statue at the Lincoln Memorial is actually is a face of Confederate General Robert E. Lee. I never did see the resemblence to either."
});

var spec2 = new PerspectiveModel({
  title: "Washington Sway",
  latitude: 38.88944603384855,
  longitude: -77.03521013259888,
  text: "Heard it told that the Washington Monument sways about .125th of an inch in winds of 30 miles per hour. Climbing it today!"
});

var spec3 = new PerspectiveModel({
  title: "Lincoln knew sign language?",
  latitude: 38.889137157265246,
  longitude: -77.04999446868896,
  text: "Someone once told me that the positioning of Lincoln’s hands were such as it formed the American Sign Language (ASL) letters “A” and “L”. But I met this man, that the sculptor Daniel Chester French, and he said that wasn't true."
});

var spec4 = new PerspectiveModel({
  title: "Secret Subway",
  latitude: 38.88993024107559,
  longitude: -77.00905323028564,
  text: "Saw a rare thing today - the United States Capitol has its own underground subway line that connects the Capitol to the House and Senate office buildings."
});

var spec5 = new PerspectiveModel({
  title: "The Capitol Building is really tall",
  latitude: 38.89183420413942,
  longitude: -77.00943946838379,
  text: "My momma once told me that the Capitol Building is the 4th tallest masonry dome in the world, surpassed by only St. Peter’s Basilica in Rome, St. Paul’s Cathedral in London and St. Issac’s Cathedral in St. Petersburg. I never been to those other masonry dome's but they must be tall."
});

var spec6 = new PerspectiveModel({
  title: "Made of What?",
  latitude: 38.88782601507118,
  longitude: -77.04766631126404,
  text: "Paying respects. Learned that the Korean Memorial is the first stainless steel memorial erected in Washington DC."
});

var spec7 = new PerspectiveModel({
  title: "Awesome Rally",
  latitude: 38.889421052390425,
  longitude: -77.04497337341309,
  text: "So turns out that rally I was at on October 15, 1969, when Jenny jumped into the pond, the one about the Viet Name War, was the largest rally that ever happened there."
});

var spec8 = new PerspectiveModel({
  title: "Touch the rock",
  latitude: 38.8882101634588,
  longitude: -77.01923489570618,
  text:"Visted the Air and Space museum today and got to touch a rock from the Moon! It is on display for visitors. "
});


var spec9 = new PerspectiveModel({
  title: "The Wrong Element",
  latitude: 38.88973003453642,
  longitude: -77.04125046730042,
  text:"Did you hear? The Beach Boys and other Rock and Roll bands were banned from performing Independence Day concerts because Ronald Regan’s Secretary of the Interior, James G. Watt suggested that these bands encouraged drug and alcohol use and attracted the “wrong element” to the Mall. I would have never guessed that those nice Beach Boys were into that stuff."
});

var spec10 = new PerspectiveModel({
  title: "Earthquake!",
  latitude: 38.88988034968907,
  longitude: -77.03431963920593,
  text: "This doesn't feel safe. The Washington Monument was cracked in four places from a rare earthquake on Tuesday, August 23, 2011."
});

//Set our seed users into array.
var users = [forrest, dan];
//Set our seed perspectives into an array.
var perspectives = [spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10];

// Loop thought the users array and push every other perspective to each user, then save the user.
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

// Loop through the perspectives and save each perspective.
for(var i=0; i<perspectives.length; i++){
  perspectives[i].save(function(err) {
    if (err){
      console.log(err);
    } else {
      console.log("Perspective was saved");
    }
  })
}
