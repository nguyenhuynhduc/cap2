
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.4.0/fullcalendar.css" />
    <!-- Bootstrap 3.3.7 -->
    <link rel="stylesheet" href="../../../public/qt_admin/bower_components/bootstrap/dist/css/bootstrap.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="../../../public/qt_admin/bower_components/font-awesome/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="../../../public/qt_admin/bower_components/Ionicons/css/ionicons.min.css">
    <!-- jvectormap -->
    <link rel="stylesheet" href="../../../public/qt_admin/bower_components/jvectormap/jquery-jvectormap.css">
    <link rel="stylesheet"
          href="../../../public/qt_admin/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="../../../public/qt_admin/dist/css/AdminLTE.min.css">
    <link rel="stylesheet" href="../../../public/qt_admin/dist/css/skins/_all-skins.min.css">
    <link rel="stylesheet" href="../../../public/qt_admin/bower_components/morris.js/morris.css">
    <link rel="stylesheet" href="../../../public/qt_admin/developerEdit/registerAccount.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="../../../public/qt_admin/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css">

    <link rel="stylesheet" href="../../../public/qt_admin/bower_components/bootstrap-daterangepicker/daterangepicker.css">

    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">


    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">


    <script type="text/javascript" src="../../../public/bootstrap/js/googlemap.js"></script>

    <style>

    .grid-container {
        display: grid;
        grid-template-columns: 100px 100px 100px 100px;
        grid-gap: 10px;
        padding: 10px;

    }

    .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
    }
    .body1{
        background-color: lightblue;
    }
    </style>

    </head>
    <div class="box-wpsau">
        <body class="hold-transition skin-blue sidebar-mini">
        <div class="wrapper">

        <header class="main-header">

        <!-- Logo -->
        <a href="http://127.0.0.1:8000/" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
    <!-- logo for regular state and mobile devices -->
    <span class="logo-lg"><b>Hey </b> Park</span>
        </a>

    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">

           <a href='http://127.0.0.1:8000/nguoidung'><button style='width: 100px;height: 50px' type='submit' class='btn btn-success pull-right' >Tài Khoản</button></a>"
        <a href='http://127.0.0.1:8000/danhsachbaidoxe?id=all'><button style='width: 100px;height: 50px' type='submit' class='btn btn-success pull-right' >Bãi Đổ Xe</button></a>"
    </nav>
    </header>
    </div>
    </body>

    </body>
</div>
<body>
<aside class="main-sidebar">
    <section class="sidebar">
        <ul class="sidebar-menu" data-widget="tree">
            <?php
            $city=$_GET['id'];
            if($city=='HN')
            {
                $city1="Ha Noi";
                $place="Hà Nội";
            }
            else if($city=='DN')
            {
                $city1="Da Nang";
                $place="Đà Nẵng";

            }else if($city=='HCM')
            {
                $city1="Ho Chi Minh";
                $place="Hồ Chí Minh";
            } ?>
            <li class="header" style="color: white">DANH SÁCH BÃI DỔ XE <?php echo $place?></li>
            <?php
            require 'db/Connect.php';
            mysqli_set_charset($connect, 'UTF8');


            $sql1="SELECT * FROM park WHERE city='$city1'";

            $query1 = mysqli_query($connect,$sql1);

            $num=mysqli_num_rows($query1);
            if($num > 0) {
                while ($row = mysqli_fetch_array($query1)) {
                    ?>
                    <li>
                        <a href="">
                            <span> <?php echo  $row['parkName']?></span>
                            <br>
                            <span> <?php echo  $row['price'].'$'?></span>
                            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
                        </a>
                    </li>
                    <?php
                }
            }
            ?>
    </section>
</aside>
<style type="text/css">
    .con1{
        height: 500px;
    }
    #map{
        width: 100%;
        height: 100%;
        border: 1px solid blue;
    }
    #data,#allData{
        display: none;
    }
</style>
<div class="con1">
    <center>
        <h1>
            Thành Phố <?php echo $place?>
        </h1>
    </center>
    <?php
    require 'education.php';
        $edu = new education;
        // truyền giữ liệu vào coll
      $coll = $edu->getCollegesBlankLatLng();
      $coll = JSON_ENCODE($coll);
      //in dữ liệu;
      echo '<div id="data">'.$coll.'</div>';


    $alldata = $edu->getAllColleges($city1);
    $alldata = JSON_ENCODE($alldata);
    //in dữ liệu;
    echo '<div id="allData">'.$alldata.'</div>';
    ?>
    <div id="map"></div>
</div>
<script type="text/javascript" src='js/googlemap.js'></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCokQzEb_YovAouumHZboIeA1_4aAEsx8k&callback=loadMap" async defer></script>
<script src="lib/jquery/jquery.min.js"></script>
<script src="lib/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>