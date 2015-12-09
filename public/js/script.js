$(document).ready(function(){
  // if (currentUser)
  Perspective.fetch().then(function(perspective){
    Perspective.all.forEach(function(perspective){
      console.log(perspective.latitude);
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
          description: perspective.text,
          // one can customize markers by adding simplestyle properties
          // https://www.mapbox.com/guides/an-open-platform/#simplestyle
          'marker-size': 'medium',
          'marker-color': '#FFA500',
          'marker-symbol': 'camera'
        }
      }).addTo(map);

    });
  });

  var popup = L.popup();
  function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent(
      "<form action = '/' method='post'>Title: <input type = 'text' name = 'title'> \n\n Perspective: <input type ='text' name = 'text'>latitude: <input type ='text' name = 'latitude' value="+e.latlng.lat+">longitude: <input type ='text' name = 'longitude' value ="+e.latlng.lng+"> <input type = 'submit'></form>").openOn(map);
  }
  if($('#logout').html()){
    map.on('click', onMapClick);
  }
});
