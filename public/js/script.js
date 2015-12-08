$(document).ready(function(){
// User.fetchPerspectives().then(function(users){
//   User.all.forEach(function(users){
//     console.log(users)
//

  // })

  Perspective.fetch().then(function(perspectives){
    console.log(perspectives)
    })
})


  map.on('click', function(e) {
    console.log(e);

    //render perspective input form
    //on "submit" post "/" create a new perspective in database
    //use ajax call to update map without page refresh?


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
