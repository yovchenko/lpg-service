function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(49.9899735,36.2505891),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
var myLatLng = {lat: 49.9899735, lng: 36.2505891};
var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
}
