<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="Dashboard">
    <meta name="keyword" content="Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
    <title>Thêm Nhân Viên</title>
    <!-- Favicons -->
    <!-- Bootstrap core CSS -->
    <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!--external css-->
    <link href="lib/font-awesome/css/font-awesome.css" rel="stylesheet" />
    <!-- Custom styles for this template -->
    <link href="css/style.css" rel="stylesheet">
    <link href="css/style-responsive.css" rel="stylesheet">

    <!-- =======================================================
      Template Name: Dashio
      Template URL: https://templatemag.com/dashio-bootstrap-admin-template/
      Author: TemplateMag.com
      License: https://templatemag.com/license/
    ======================================================= -->
</head>
<body>
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
    <div id="map"></div>

</div>
<script type="text/javascript" src='js/googlemap.js'></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCSXHGf36G5-dsh1XwGqdzZbmJlWOLtiKM&callback=loadMap" async defer></script>
<script src="lib/jquery/jquery.min.js"></script>
<script src="lib/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>