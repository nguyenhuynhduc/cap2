<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>@yield('title')</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.4.0/fullcalendar.css" />
{{--    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.css" />--}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.4.0/fullcalendar.min.js"></script>
{{--    <link href="{!! asset('/css/calender/fullcalendar.css') !!}" rel='stylesheet' />--}}
{{--    <link href='{!! asset('/css/calender/fullcalendar.print.css') !!}' rel='stylesheet' media='print' />--}}
{{--    <script src='{!! asset('/qt_admin/calender/js/jquery-1.10.2.js') !!}' type="text/javascript"></script>--}}
{{--    <script src='{!! asset('/qt_admin/calender/js/jquery-ui.custom.min.js') !!}' type="text/javascript"></script>--}}
{{--    <script src='{!! asset('/qt_admin/calender/js/fullcalendar.js') !!}' type="text/javascript"></script>--}}
    <script src='{!! asset('/qt_admin/calender/js/calenderheader.js') !!}' type="text/javascript"></script>
{{--    <link href='{!! asset('/css/calender/calender.css') !!}' rel='stylesheet' />--}}
    <!-- Bootstrap 3.3.7 -->
    <link rel="stylesheet" href="{!! asset('/qt_admin/bower_components/bootstrap/dist/css/bootstrap.min.css') !!}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{!! asset('/qt_admin/bower_components/font-awesome/css/font-awesome.min.css') !!}">
    <!-- Ionicons -->
    <link rel="stylesheet" href="{!! asset('/qt_admin/bower_components/Ionicons/css/ionicons.min.css') !!}">
    <!-- jvectormap -->
    <link rel="stylesheet" href="{!! asset('qt_admin/bower_components/jvectormap/jquery-jvectormap.css') !!}">
    <link rel="stylesheet"
          href="{!! asset('/qt_admin/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css') !!}">
    <!-- Theme style -->
    <link rel="stylesheet" href="{!! asset('/qt_admin/dist/css/AdminLTE.min.css') !!}">
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="{!! asset('/qt_admin/dist/css/skins/_all-skins.min.css') !!}">
    <link rel="stylesheet" href="/qt_admin/bower_components/morris.js/morris.css">
    <link rel="stylesheet" href="{!! asset('/qt_admin/developerEdit/registerAccount.css') !!}">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="{!!  asset('qt_admin/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css') !!}">
    <!-- Daterange picker -->
    <link rel="stylesheet" href="{!! asset('qt_admin/bower_components/bootstrap-daterangepicker/daterangepicker.css') !!}">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <link rel="stylesheet" href="{{ asset('/qt_admin/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css') }}">
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Google Font -->
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">

    <link rel="stylesheet" href="{!! asset('adv/css/bootstrap.css') !!}">
    <link rel="stylesheet" href="{!! asset('adv/css/font-awesome.css') !!}">
    <link rel="stylesheet" href="{!! asset('adv/css/my.css') !!}">
    <link rel="stylesheet" href="{!! asset('adv/css/menuleft.css') !!}">
    <link rel="stylesheet" href="{!! asset('adv/css/admin.css') !!}">





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


    </style>



</head>
<body class="hold-transition skin-blue sidebar-mini">
<div class="wrapper">

    <header class="main-header">

        <!-- Logo -->
        <a href="#" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini"><b>B</b>O</span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg"><b>Admin</b> BOXYZ</span>
        </a>

        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>
            <!-- Navbar Right Menu -->

        </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
@include('componnets.navleft')

<!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">

