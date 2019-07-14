var map;
var gecoder;

function loadMap(){
    var pune={lat: 16.064634, lng: 108.217996};
     map = new google.maps.Map(document.getElementById('map'), {
        center: pune,
        zoom: 15,
    });
    /*var marker = new google.maps.Marker({
        position: pune ,
        map: map
    });*/
/*
    var cdata = JSON.parse(document.getElementById('data').innerHTML);
    geocoder = new google.maps.Geocoder();
    codecity(cdata);*/


    var allData = JSON.parse(document.getElementById('allData').innerHTML);
    ShowAllColleges(allData)


}

function  ShowAllColleges(allData) {
    var infowindow = new google.maps.InfoWindow();
    Array.prototype.forEach.call(allData,function (data){
        /*var infowindow = new google.maps.InfoWindow();*/
        var content = document.createElement('div');
        var strong = document.createElement('strong');
        var price = document.createElement('strong');


        strong.textContent = data.parkName+" ";
        price.textContent = data.price+'$';
        content.appendChild(strong);
        content.appendChild(document.createElement("br"));
        content.appendChild(price);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(data.lat,data.lng),
            map: map
        });
        marker.addListener('mouseover',function () {
            infowindow.setContent(content);

            infowindow.open(map,marker);
        })
        /*marker.onload()
        {
            infowindow.setContent(content);
            infowindow.open(map,marker);
        }*/
    })

}

function codecity(cdata) {
    Array.prototype.forEach.call(cdata,function (data){

        var city = data.parkName + ' ' + data.city;
        geocoder.geocode( { 'city': city}, function(results, status) {
            if (status == 'OK') {
            map.setCenter(results[0].geometry.location);
            console.log(results[0].geometry.location);
            } else {
            alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    });
}