<!DOCTYPE html>
<html>
<head>


    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    {{--<link type="text/css" rel="stylesheet" href="{!! asset('slot/css/stylesVIP1.css') !!}" />
    <link type="text/css" rel="stylesheet" href="{!! asset('slot/css/swiper.css" rel="stylesheet') !!}"/>
    <link type="text/css" rel="stylesheet" href="{!! asset('slot/css/owl.carousel.min.css') !!}">
    <link type="text/css" rel="stylesheet" href="{!! asset('slot/css/owl.theme.default.css') !!}">
    <link type="text/css" rel="stylesheet" href="{!! asset('slot/css/jquery.mCustomScrollbar.css') !!}">
    <script type="text/javascript" src="{!! asset('slot/js/jquery-1.11.0.js') !!}"></script>
    <script type="text/javascript" src="{!! asset('slot/js/script4.js') !!}"></script>
    <script type="text/javascript" src="{!! asset('slot/js/menudrop.js') !!}"></script>
    <script type="text/javascript" src="{!! asset('slot/js/owl.carousel.min.js') !!}"></script>
    <script type="text/javascript" src="{!! asset('slot/js/swiper.min.js') !!}"></script>
    <script type="text/javascript" src="{!! asset('slot/js/ckeditor.js') !!}"></script>
    <script type="text/javascript" src="{!! asset('slot/js/ckfinder.js') !!}"></script>--}}




</head>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <body class="hold-transition skin-blue sidebar-mini">
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
        <a class="navbar-brand" href="#">Hey Park</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Trang Chủ <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Bãi Đổ Xe
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="{{route('selectPark')}}?id=all">Tất Cả</a>
                        <a class="dropdown-item" href="{{route('selectPark')}}?id=HN">Hà Nội</a>
                        <a class="dropdown-item" href="{{route('selectPark')}}?id=DN">Đà Nẵng</a>
                        <a class="dropdown-item" href="{{route('selectPark')}}?id=HCM">Hồ Chí Minh</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Bản Đồ
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="http://localhost/cap2/resources/views/Users/SelectDaNang.php?id=HN">Hà Nội</a>
                        <a class="dropdown-item" href="http://localhost/cap2/resources/views/Users/SelectDaNang.php?id=DN">Đà Nẵng</a>
                        <a class="dropdown-item" href="http://localhost/cap2/resources/views/Users/SelectDaNang.php?id=HCM">Hồ Chí Minh</a>
                    </div>
                </li>
            </ul>
            @if (session()->has('user'))
                <a href='{{route('logout')}}'><button style='width: auto;height: auto' type='submit' class='btn btn-success pull-right' >Đăng Xuất</button></a>
            @else
                <a href='{{route('login')}}'><button style='width: auto;height: auto' type='submit' class='btn btn-success pull-right' >Đăng Nhập</button></a>
            @endif
        </div>
    </nav>
    </body>
