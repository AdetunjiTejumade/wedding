var map;

function myMap() {
var wwitt = {lat: 42.281011,lng:  -122.570865};
	var mapOptions = {
    		center: new google.maps.LatLng(42.281011, -122.570865),
    		zoom: 9,
    		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
  /*
   * create infowindow (which will be used by markers)
   */
  var infoWindow = new google.maps.InfoWindow();
  
  /*
  * marker creater function (acts as a closure for html parameter)
  */
  function createMarker(options, html) {
    var marker = new google.maps.Marker(options);
    if (html) {
      google.maps.event.addListener(marker, "click", function () {
        infoWindow.setContent(html);
        infoWindow.open(options.map, this);
      });
    }
    return marker;
  }
  
  var marker1 = createMarker({
  position: wwitt,
  map: map
  }, "<h2>Willow Witt Ranch</h2><p>658 Shale City Rd, Ashland, OR 97520</p>");
}