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
