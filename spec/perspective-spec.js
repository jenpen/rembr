var Perspective = require("../public/js/models/perspective");

describe ("A perspective", function(){
// DRY code changes
  var wedding;
  beforeEach(function(){
    wedding = new Perspective("Kris and Jen's Wedding", "10/18/08", "Jefferson Memorial", "It was fun.");
  });

// Tests
  it("should have a title", function (){
    expect(wedding.title).toBeDefined();
  });
  it("should have a date of the perspective", function (){
    expect(wedding.date).toBeDefined();
    expect(wedding.date).toBe("10/18/08");
  });
  it("should have a location", function (){
    expect(wedding.location).toBeDefined();
  });
  it("should include text", function (){
    expect(wedding.text).toBeDefined();
  });


  it("should be able to be edited", function(){
    var wedding = new Perspective ("Kris and Jen's Wedding");

  });
  it("should be able to be deleted", function(){
    var wedding = new Perspective ("Kris and Jen's Wedding");

  });
});









// How to do asychronous stuff
//
// it("logs into Facebook", function(){
//   $.getSON("http://facebook").then(function(res) {
//     expect(res.isLoggedIn).toBe(true);
//   });
// });
//
// it("saves to the databse", function(){
//   var wedding = new Perspective();
//   wedding.save().then(function(err, res){
//     expect( err ).not.toBeNull();
//   });
// });
