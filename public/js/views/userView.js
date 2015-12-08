var UserView = function(user){
 this.user = user;
 console.dir(user)
 this.$el = $("<div class='user'></div>");
}
AuthorView.prototype = {
 render: function(){
   var self = this;
   var user = self.user;
   self.$el.html(self.template());
   user.perspectives.forEach(function(perspective){
     var perspectiveView = new PerspectiveView(perspective);
     self.$el.append(perspectiveView.render());
   });
   $("#container").append(self.$el);
 },
 template:  function(){
   var html = $("<div class='users'>");
   var user = this.user;
   html.append("<p>"+user.email+"</p>");
   return html;
 }
}
