var PerspectiveView = function(perspective){
 this.perspective = perspective;
 this.$el = $("<p class='perspective'></p>");
}
PerspectiveView.prototype = {
 render: function(){
   var perspective = this.perspective;
   return this.$el.html(perspective.body);
 }
}

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
  // ,
  // update: function(artistData) {
  // var self = this;
  // var url = "http://localhost:3000/artists/" + this.id;
  // var request = $.ajax({
  //   url: url,
  //   method: "patch",
  //   data: JSON.stringify(artistData),
  //   contentType : 'application/json'
  // }).then(
  //   function(updatedArtistInfo) {self.reload(updatedArtistInfo);}
  // );
  // return request;
  // },
  //
  // reload: function(newData){
  //   for(var attrname in newData) {
  //     this[attrname] = newData[attrname];
  //   }
  // }
};
