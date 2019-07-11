var map;
var geocoder;

function loadMap() {
    map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 16.072141, lng: 108.224844},
            zoom: 15,

        }
    )
//co the xay ra loi
    var marker = new google.maps.Marker({
        position: pune ,
        map: map
    });


    var cdata = JSON.parse(document.getElementById('data').innerHTML);
    geocoder = new google.maps.Geocoder();
    codeAddress(cdata);
}

function codeAddress(cdata) {
    Array.prototype.forEach.call(cdata, function (data) {
        var address = data.name + ' ' + data.address;
        geocoder.geocode({'address': address}, function (results, status) {
            if (status == 'OK') {
                map.setCenterPoint(results[0].geometry.location);
                var points={};
                points.id=data.id;
                points.lat= map.setCenterPoint().lat();
                points.lat= map.setCenterPoint().lng();

                updateCollegeWithLatLng(points);
                alert();
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    });
}

function updateCollegeWithLatLng() {
    $.ajax({
        url:"action.php",
        method:"post",
        data: points,
        success: function (res) {
            console.log(res);
        }
    })

    
}