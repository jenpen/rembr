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
