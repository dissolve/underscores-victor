function initialize() {

	// Create an array of styles.
	var ddllcStyles = [
		{ featureType: "water", "stylers": [ { "color": "#ebebeb" } ] },
		{ featureType: "landscape.natural.landcover", "stylers": [ { "saturation": -100 }, { "lightness": 100 }, { "gamma": 0.01 } ] },
		{ featureType: "poi", "stylers": [ { "saturation": -100 }, { "lightness": 100 } ] },
		{ featureType: "road.highway", "stylers": [ { "visibility": "off" } ] },
		{ elementType: "labels.text.fill", "stylers": [ { "lightness": 20 } ] },
		
		{ featureType: "road.local", elementType: "geometry.stroke", stylers: [ { "visibility": "off" } ] },
		{ featureType: "administrative.land_parcel", "elementType": "geometry", "stylers": [ { "visibility": "off" } ] },
		{ featureType: "landscape.man_made", stylers: [ { "color": "#808080" }, { "saturation": -100 }, { "lightness": 70 } ] },
	];

	// Create a new StyledMapType object, passing it the array of styles,
	// as well as the name to be displayed on the map type control.
	var ddllcMapType = new google.maps.StyledMapType(ddllcStyles);

	// Create a map object, and include the MapTypeId to add
	// to the map type control.
	var mapOptions = {
		zoom: 5,
		center: ddllcMapType,
		scrollwheel: false,
		panControl: false,
		mapTypeControl: false,
		zoomControl: true,
		zoomControlOptions: {style: google.maps.ZoomControlStyle.SMALL},
		center: new google.maps.LatLng(39.8,-74.40833),
		mapTypeControlOptions: {
		mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'ddllc']
    	}
  	};
			
  	var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
			
	var image = 'img/pointer.png';
    var myLatLng_1 = new google.maps.LatLng(42.351366,-71.071511);
    var iconMarker = new google.maps.Marker({
       	position: myLatLng_1,
       	map: map,
        icon: image
    });
	
	var image = 'img/pointer.png';
    var myLatLng_2 = new google.maps.LatLng(35.220487,-80.844214);
    var iconMarker = new google.maps.Marker({
       	position: myLatLng_2,
       	map: map,
        icon: image
    });	

	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('ddllc', ddllcMapType);
	map.setMapTypeId('ddllc');	
}

google.maps.event.addDomListener(window, 'load', initialize);