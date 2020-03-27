//js code for search box & geolocation taken from google maps api tutorial page:
//https://developers.google.com/maps/documentation/javascript/examples/map-geolocation
//https://developers.google.com/maps/documentation/javascript/examples/places-searchbox

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 12
  });

  infoWindow = new google.maps.InfoWindow;
  if (navigator.geolocation) {
  	navigator.geolocation.getCurrentPosition(function(position) {
	  var pos = {
		lat: position.coords.latitude,
		lng: position.coords.longitude
	  };

	  infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
	  infoWindow.open(map);
	  map.setCenter(pos);
	}, function() {
		handleLocationError(true, infoWindow, map.getCenter());
	});
	} else {
	  // Browser doesn't support Geolocation
	  handleLocationError(false, infoWindow, map.getCenter());
	}
	
	service = new google.maps.places.PlacesService(map);
	
	/*if(document.getElementById("compost heap").checked){
		var request = {
			query: 'compost heap',
			fields: ['name', 'geometry'],
		};
		service.findPlaceFromQuery(request, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              createMarker(results[i]);
            }

            map.setCenter(results[0].geometry.location);
          }
        });
	}
	if(document.getElementById("electronics recycling").checked) {
		var request = {
			query: 'electronics recycling',
			fields: ['name', 'geometry'],
		};
		service.findPlaceFromQuery(request, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              createMarker(results[i]);
            }

            map.setCenter(results[0].geometry.location);
          }
        });
	}
	if(document.getElementById("glass recycling").checked) {
		var request = {
			query: 'glass recycling',
			fields: ['name', 'geometry'],
		};	
		service.findPlaceFromQuery(request, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              createMarker(results[i]);
            }
			
            map.setCenter(results[0].geometry.location);
          }
        });
	}
	if(document.getElementById("ink cartridges").checked){
		var request = {
			query: 'ink cartridge recycling',
			fields: ['name', 'geometry'],
		};
		service.findPlaceFromQuery(request, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              createMarker(results[i]);
            }
			
            map.setCenter(results[0].geometry.location);
          }
        });		
	}*/
	
	
	var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
		
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
		
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      
}

function createMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

