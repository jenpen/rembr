// require("../../env.js")
$(document).ready(function(){

  map.locate()
  map.on('locationfound', function(e) {
    console.log(e.latlng.lat)
    console.log(e.latlng.lng)
    map.setView([e.latlng.lat, e.latlng.lng], 13);

  })

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
            title: perspective.title + " "+ perspective.user,
            description: perspective.text + "<button class='deletePerspective' title=" + perspective.id + ">Delete</button>",
            // one can customize markers by adding simplestyle properties
            // https://www.mapbox.com/guides/an-open-platform/#simplestyle
            'marker-size': 'small',
            'marker-color': '#FFA500',
            'marker-symbol': 'marker-stroked'
          }
        }).addTo(map);
      });
    });
    if($('#logout').html()){

    $("#map").on("click", ".deletePerspective", function(e){
      var perspectiveId = this.title;
      $.ajax({
        url: "./perspectives/" + perspectiveId,
        method: "DELETE"
      }).then(function(response){
        location.reload();
      });
    });
}
  var popup = L.popup();
  function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent(
      "<form class='form-group set-perspective-form' action='/' method='post'> Title: <input class='form-control' type ='text' name ='title'> Perspective: <textarea rows='4' class='form-control' id='perspective-input' name='text'></textarea><input id='field_show_none' type ='text' name='latitude' value="+e.latlng.lat+"><input id='field_show_none' type='text' name='longitude' value ="+e.latlng.lng+"> <input class='btn btn-default button-padding'  id='link-color' type='submit'></form>").openOn(map);
  }

  if($('#logout').html()){
    map.on('click', onMapClick);
    }
  });
