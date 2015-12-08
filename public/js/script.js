$(document).ready(function(){


  map.on('click', function(e) {
    console.log(e);

    // perspective = new Perspective{
    //   title:,
    //   text:,
    //   date:,
    //   longitude: e.latlng.lat,
    //   latitude: e.latlng.lng,
    //   user: currentUser
    // }

    // perspective = new Perspective(some JSON)

    L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
  });

  var popup = L.popup();

  function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
  }

  map.on('click', onMapClick);
});
