var Perspective = function(info) {
  this.title = info.title;
  this.date = info.date;
  this.longitude = info.longitude;
  this.latitude = info.latitude;
  this.text = info.text;
};
 Perspective.all = [];

 Perspective.fetch = function(){
   var url = "http://localhost:7812/perspectives";
   var request = $.getJSON(url).then(function(response){
     for(var i = 0; i < response.length; i++){
       Perspective.all.push(new Perspective(response[i]));

     }
   }).fail(function(response){
     console.log("Users fetch fail.");
   });
   return request;
 };

Perspective.prototype = {
  create: function(){
  var url = "http://localhost:7812/perspectives";
  var request = $.getJSON(url).then(function(response){
    console.log(response)
    // L.mapbox.featureLayer({
    //   // this feature is in the GeoJSON format: see geojson.org for the full specification
    //   type: 'Feature',
    //   geometry: {
    //     type: 'Point',
    //     // coordinates here are in longitude, latitude order because x, y is the standard for GeoJSON and many formats
    //     coordinates: [
    //       this.longitude,
    //       this.latitude
    //     ]
    //   },
    //   properties: {
    //     title: this.title,
    //     description: this.text,
    //     // one can customize markers by adding simplestyle properties
    //     // https://www.mapbox.com/guides/an-open-platform/#simplestyle
    //     'marker-size': 'large',
    //     'marker-color': '#007399',
    //     'marker-symbol': 'camera'
    //   }
    // }).addTo(map);
  })
 }
}
