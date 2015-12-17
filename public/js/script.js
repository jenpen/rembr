$(document).ready(function(){
  // NHO: Feel like this page could be refactored, be careful of your indentation and code readability
  map.locate();
  map.on('locationfound', function(e) {
    map.setView([e.latlng.lat, e.latlng.lng], 13);

  });



  Perspective.fetch().then(function(perspective){
    Perspective.all.forEach(function(perspective){

      L.mapbox.featureLayer({
        // this feature is in the GeoJSON format: see geojson.org for the full specification
        type: 'Feature',
        geometry: {
          type: 'Point',
          // coordinates here are in longitude, latitude order because x, y is the standard for GeoJSON and many formats
          coordinates: [
            perspective.longitude,
            perspective.latitude
          ]
        },
        properties: {
          title: perspective.title,
          //  NHO: How could we refactor our code so we do not have to stringify our html, what about something like handlebars on the client-side?
          description: perspective.text + "  <button class='deletePerspective btn btn-default button-padding' id='link-color' title=" + perspective.id + ">Delete</button>",
          // NHO: How can we hide this button unless the creator of the post is logged in to protect our business logic?

          // one can customize markers by adding simplestyle properties
          // https://www.mapbox.com/guides/an-open-platform/#simplestyle
          'marker-size': 'small',
          'marker-color': '#FFA500',
          'marker-symbol': 'marker-stroked'
        }
      }).addTo(map);
    });
    if($('#logout').html()){

    $('#map').on('click', '.deletePerspective', function(e){
      var perspectiveId = this.title;
      $.ajax({
        url: './perspectives/' + perspectiveId,
        method: 'DELETE'
      }).then(function(response){
        location.reload();
      });
    });
}
  var popup = L.popup();
  function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    //  NHO: Same comment for here, how could we refactor our code so we do not have to stringify our html, what about something like handlebars on the client-side?
    .setContent(
      "<form class='form-group set-perspective-form' action='/' method='post'> Title: <input class='form-control' type ='text' name ='title'> Perspective: <textarea rows='4' class='form-control' id='perspective-input' name='text'></textarea><input id='field_show_none' type ='text' name='latitude' value="+e.latlng.lat+"><input id='field_show_none' type='text' name='longitude' value ="+e.latlng.lng+"> <input class='btn btn-default button-padding'  id='link-color' type='submit'></form>").openOn(map);
  }

  if($('#logout').html()){
    map.on('click', onMapClick);
    }
  });

});
