function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(50.027694,36.336569),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
var myLatLng = {lat: 50.027694, lng: 36.336569};
var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'GasCentr'
        });
}
