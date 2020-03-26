//js code taken from google maps api tutorial page:
//https://developers.google.com/maps/documentation/javascript/examples/map-geolocation

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
	
	if(document.getElementById("compost heap").checked){
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
	}
	
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

