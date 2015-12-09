$(document).ready(function(){
  // User.fetchPerspectives().then(function(users){
  //   User.all.forEach(function(users){
  //     console.log(users)
  // });
  //   Perspective.fetch().then(function(perspectives){
  //     console.log(perspectives)
  //     })
  // })
  Perspective.fetch().then(function(perspective){
    Perspective.all.forEach(function(perspective){
      // L.marker([perspective.latitude, perspective.longitude]).addTo(map);
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
          'marker-size': 'large',
          'marker-color': '#007399',
          'marker-symbol': 'camera'
        }
      }).addTo(map);

    });
  });

  map.on('click', function(e) {
    console.log(e);
    L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
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
  });

  var popup = L.popup();
  function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent(
      "<form>Title: <input type = 'text' name = 'title'> \n\n Perspective: <input type ='text' name = 'perspective'> <input type = 'submit'></form>").openOn(map);

// Goal: see action on clicking submit?????
    $("#form").submit(function(e){
      // e.preventDefault();
      console.log("please just submit");
      var date =$("#date").val();
      console.log(date);
    });
  }
    map.on('click', onMapClick);

  });
