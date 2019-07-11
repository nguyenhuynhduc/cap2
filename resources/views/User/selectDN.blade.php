@extends('masterUser')
@section('title')
    ĐÀ NẴNG
@endsection
@section('contain')
    <style type="text/css">
        .con1{
            height: 500px;
        }
        #map{
            width: 100%;
            height: 100%;
            border: 1px solid blue;
        }
        #data{
            display: none;
        }
    </style>

    <div class="con1">
    <center>
        <h1>
            Google Maps
        </h1>
    </center>

       @php
        $coll = json_encode($list,true);

        echo '<div id="data">'.$coll.'</div>';
       @endphp

        <div id="map"></div>

    </div>

    <script type="text/javascript" src='{!! asset('/bootstrap/js/googlemap.js') !!}'></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAVQEAPAglsyD2w7rWppn2Te21X5rWrMo4&callback=loadMap"
            async defer></script>
    @endsection