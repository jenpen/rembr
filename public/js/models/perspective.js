var Perspective = function(info) {
  this.title = info.title;
  this.date = info.date;
  this.longitude = info.longitude;
  this.latitude = info.latitude;
  this.text = info.text;
  this.id = info.id;
  this.user = info.user;
};

Perspective.all = [];

Perspective.fetch = function(){
  var url = '/perspectives';
  var request = $.getJSON(url).then(function(response){
    for(var i = 0; i < response.length; i++){
      Perspective.all.push(new Perspective(response[i]));

    }
  }).fail(function(response){
    console.log('Users fetch fail.');
  });
  return request;
};

Perspective.prototype = {
  create: function(){
    var url = '/perspectives';
    var request = $.getJSON(url).then(function(response){
      console.log(response);
    });
  }
};
