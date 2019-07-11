@extends('masterUser')
@section('title')
    Home
@endsection
@section('contain')
    <style>
        .body1{
            background-color: lightblue;
        }
        .one{
            background-color: whitesmoke;
            background-image: url('{!! asset('/img/nendep.jpg') !!}');
            background-repeat: no-repeat;
            background-size: auto;
        }
    </style>

    <body style="
            background-color: whitesmoke;
            background-image: url('{!! asset('/img/nendep.jpg') !!}');
            background-repeat: no-repeat;
            background-size:1500px" >

    <div class="container">

        <h1 style="color: white; text-align: center; font-family: 'Times New Roman'">CHÀO MỪNG BẠN ĐẾN HEY PARK</h1>

        <h2 style="text-align: center">Bạn Đang Muốn Đến Thành Phố Nào</h2>
        <br>
        <br> <br> <br>
        <div style=" text-align: center" >
             <h3>Chọn Thành Phố Bạn Muốn Đến</h3>

        <div class="dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Chọn....
                <span class="caret"></span></button>
            <ul class="dropdown-menu" style="left: 500px">
                <li><a href="#">Hà Nội</a></li>
                <li><a href="{{route('BT_SelectDN')}}">Đà Nẵng</a></li>
                <li><a href="#">Thành Phố Hồ Chí Minh</a></li>
            </ul>
        </div>
        </div>
        </div>
    </body>


@endsection