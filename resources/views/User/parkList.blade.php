@extends('masterUser')
@section('title')
    Profile
@endsection
@section('contain')

    <div class="box-wp">

        @if (isset($msg))
            <script type="text/javascript">alert("{{ $msg }}");</script>
        @endif
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Trang Chủ</a></li>
                <li class="breadcrumb-item active" aria-current="page">Bãi Đỗ Xe {{$city}}</li>
            </ol>
        </nav>

        <a>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" style="color: #0b93d5" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        &nbsp &nbsp;&nbsp Tình Trạng
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
    <div class="row" >
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
        @foreach($list as $item)
            <div class="item-ln" style="">
                <div class="box">
                    <div class="img" title="bai do xe" >
                        <a>
                            <img  src="{!! asset('img/'.$item->img) !!}">
                        </a>
                            @foreach( $count1 as $item1 )
                            @if($item1['id']==$item->idPark)
                                <p style="text-align: right;">{{$item1['count']}}/40 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
                                @break
                            @endif
                        @endforeach

                    </div>
                    <div style="text-align: center">
                        <p>{{$item->parkName}}</p>
                        <p>{{$item->price}} VNĐ</p>
                    </div>
                    <div>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        <a href="{{route('bookShort')}}?id={{$item->idPark}}"> <button  style="width: 100px" class="btn btn-success pull-left">Ngắn Hạn</button></a>
                        &nbsp&nbsp&nbsp&nbsp&nbsp
                        <a href="{{route('timeLong')}}?id={{$item->idPark}}"><button  style="width: 100px" class="btn btn-danger pull-right">Dài Hạn</button></a>
                    </div>

                </div>
            </div>
            @endforeach
    </div>

    @endsection