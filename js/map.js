function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(50.0008608,36.2393371),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
var myLatLng = {lat: 50.0008608, lng: 36.2393371};
var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
}
