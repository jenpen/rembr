var User = function(info){
  this.name = info.name;
  this._id = info._id;
  this.perspective = info.perspective;
};

User.all = [];

User.fetch = function(){
  var url = "http://localhost:7812/users";
  var request = $.getJSON(url).then(function(response){
    for(var i = 0; i < response.length; i++){
      User.all.push(new User(response[i]));
    }
  }).fail(function(response){
    console.log("Users fetch fail.");
  });
  return request;
};

User.prototype = {
  fetchPerspectives: function(){
    var user = this;
    var url = "http://localhost:7812/perspectives";
    user.perspectives = [];
    var request = $.getJSON(url).then(function(response){
      for(var i = 0; i < response.length; i++){
        user.perspectives.push(new Perspective(response[i]));
      }
    }).fail(function(repsonse){
      console.log("js failed to load");
    });
    return request;
  }
};
