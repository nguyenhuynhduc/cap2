@extends('masterUser')
@section('title')
    Profile
@endsection
@section('contain')

    <br>
    <div class="box-wp">
            <a href="" title="Trang chủ">Trang chủ </a>
            <a>/</a>
        <!-- /.box -->
        @if (isset($msg))
            <script type="text/javascript">alert("{{ $msg }}");</script>
        @endif

            <a href="" title="Tin tức"> Danh Sách Bãi Đỗ Xe {{$city}}</a>

            <a>/</a>

        <a>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" style="color: #0b93d5" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Tình Trạng
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="{{route('selectPark')}}?id={{$code}}">Tất Cả</a>
                        <a class="dropdown-item" href="{{route('selectPark')}}?id={{$code}}&re=all">Còn Chổ</a>
                    </div>
                </li>
            </ul>
        </a>

    </div>
    <br>
    <div class="row">
        @foreach($list as $item)
        <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100" style="text-align: center; ">
                <a href="#"><img class="changeImg" style="height: 150px; width: auto" src="{!! asset('img/baido1.jpg') !!}"></a>
                <div class="card-body" >
                    <h4 class="card-title">
                        <a href="#">{{$item->parkName}}</a>
                    </h4>
                    <h5>${{$item->price}}</h5>
                </div>
            </div>
        </div>
            @endforeach
    </div>

    @endsection