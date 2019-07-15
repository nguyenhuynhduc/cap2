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

        <a href="" title="Tin tức">  Bãi Đỗ Xe </a>
        <a>/</a>
        <a href="" title="Tin tức">  Ô Đỗ Xe </a>


        <br>

    </div>
    <br><br><br>

    <div class="row row-filter">
            <div class="item-ln">
                <div class="box">
                    <div class="img" title="bai do xe" >
                        <a>
                            <img src="{!! asset('img/caron.jpg') !!}">
                        </a>
                    </div>
                    <div style="text-align: center">
                        <p>Bãi Xe nguyễn Văn Linh</p>
                        <p>10000 VNĐ</p>
                    </div>
                    <div>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        <a><button class="btn btn-success pull-left">Ngắn Hạn</button></a>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        <a><button class="btn btn-danger pull-right">Dài Hạn</button></a>
                    </div>

                </div>
            </div>
        <div class="item-ln">
            <div class="box">
                <div class="img" title="bai do xe" >
                    <a>
                        <img src="{!! asset('img/caron.jpg') !!}">
                    </a>
                </div>
                <div style="text-align: center">
                    <p>Bãi Xe nguyễn Văn Linh</p>
                    <p>10000 VNĐ</p>
                </div>
                <div style="text-align: center; color: red">
                   <p> Hiện Tại Đã Có Người Gửi</p>
                </div>



            </div>
        </div>
        <div class="item-ln">
            <div class="box">
                <div class="img" title="bai do xe" >
                    <a>
                        <img src="{!! asset('img/caron.jpg') !!}">
                    </a>
                </div>
                <div style="text-align: center">
                    <p>Bãi Xe nguyễn Văn Linh</p>
                    <p>10000 VNĐ</p>
                </div>
                <div style="text-align: center; color: red">
                    <p> Hiện Tại Đang Gặp Sự Cố</p>
                </div>



            </div>
        </div>
        <div class="item-ln">
            <div class="box">
                <div class="img" title="bai do xe" >
                    <a>
                        <img src="{!! asset('img/caron.jpg') !!}">
                    </a>
                </div>
                <div style="text-align: center">
                    <p>Bãi Xe nguyễn Văn Linh</p>
                    <p>10000 VNĐ</p>
                </div>
                <div style="text-align: center; color: red">
                    <p> Hiện Tại Đang Gặp Sự Cố</p>
                </div>



            </div>
        </div>
        <div class="item-ln">
            <div class="box">
                <div class="img" title="bai do xe" >
                    <a>
                        <img src="{!! asset('img/caron.jpg') !!}">
                    </a>
                </div>
                <div style="text-align: center">
                    <p>Bãi Xe nguyễn Văn Linh</p>
                    <p>10000 VNĐ</p>
                </div>
                <div style="text-align: center; color: red">
                    <p> Hiện Tại Đang Gặp Sự Cố</p>
                </div>



            </div>
        </div>
        <div class="item-ln">
            <div class="box">
                <div class="img" title="bai do xe" >
                    <a>
                        <img src="{!! asset('img/caron.jpg') !!}">
                    </a>
                </div>
                <div style="text-align: center">
                    <p>Bãi Xe nguyễn Văn Linh</p>
                    <p>10000 VNĐ</p>
                </div>
                <div>
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    <a><button class="btn btn-success pull-left">Ngắn Hạn</button></a>
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    <a><button class="btn btn-danger pull-right">Dài Hạn</button></a>
                </div>

            </div>
        </div>
        <div class="item-ln">
            <div class="box">
                <div class="img" title="bai do xe" >
                    <a>
                        <img src="{!! asset('img/caron.jpg') !!}">
                    </a>
                </div>
                <div style="text-align: center">
                    <p>Bãi Xe nguyễn Văn Linh</p>
                    <p>10000 VNĐ</p>
                </div>
                <div style="text-align: center; color: red">
                    <p> Hiện Tại Đã Có Người Gửi</p>
                </div>



            </div>
        </div> <div class="item-ln">
            <div class="box">
                <div class="img" title="bai do xe" >
                    <a>
                        <img src="{!! asset('img/caron.jpg') !!}">
                    </a>
                </div>
                <div style="text-align: center">
                    <p>Bãi Xe nguyễn Văn Linh</p>
                    <p>10000 VNĐ</p>
                </div>
                <div>
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    <a><button class="btn btn-success pull-left">Ngắn Hạn</button></a>
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    <a><button class="btn btn-danger pull-right">Dài Hạn</button></a>
                </div>

            </div>
        </div>
        <div class="item-ln">
            <div class="box">
                <div class="img" title="bai do xe" >
                    <a>
                        <img src="{!! asset('img/caron.jpg') !!}">
                    </a>
                </div>
                <div style="text-align: center">
                    <p>Bãi Xe nguyễn Văn Linh</p>
                    <p>10000 VNĐ</p>
                </div>
                <div style="text-align: center; color: red">
                    <p> Hiện Tại Đã Có Người Gửi</p>
                </div>



            </div>
        </div>

       </div>



    <br>

    @endsection