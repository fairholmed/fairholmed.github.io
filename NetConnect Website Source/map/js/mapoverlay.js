function initialize() {
    var mapOptions = {
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
    var startPosition = new google.maps.LatLng(51.41149, -1.29493);   
    var radius =  100; //radius in meters
    drawHorizontalHexagonGrid(map,startPosition,radius,6);
    map.setCenter(startPosition);
}



function isOdd(value){
    if (value%2 == 0)
        return false;
    else
        return true;
}

function drawHorizontalHexagonGrid(map,startPosition,radius,count){
    var curPos = startPosition;
	
    var width = radius * 2 * Math.sqrt(3)/2 ; 
	var offset = (width/2);
	for(var j = 1;j < count; j++){
		
    for(var i = 0;i < count; i++){
        drawHorizontalHexagon(map,curPos,radius);
        curPos = google.maps.geometry.spherical.computeOffset(curPos, width,90);   
    }
		curPos = startPosition;
		if (isOdd(j) == true)
		{curPos = google.maps.geometry.spherical.computeOffset(curPos, offset,90)}; 
	 curPos = google.maps.geometry.spherical.computeOffset(curPos, (j*(width -18.5)),180); 
	}
}

function drawHorizontalHexagon(map,position,radius){
    var coordinates = [];
    for(var angle= 0;angle < 360; angle+=60) {
       coordinates.push(google.maps.geometry.spherical.computeOffset(position, radius, angle));    
    }
  
    // Construct the polygon.
    var polygon = new google.maps.Polygon({
        paths: coordinates,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    polygon.setMap(map);
    map.setCenter(position);
}

google.maps.event.addDomListener(window, 'load', initialize);