@extends('masterUser')
@section('title')
    Đăng Ký Dài Hạn
@endsection
@section('contain')
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">

            <li class="breadcrumb-item"><a href="#">Trang Chủ</a></li>
            <li class="breadcrumb-item active" aria-current="page">Đăng Ký Dài Hạn </li>
        </ol>
    </nav>
    <div class="container">
        <div class="row my-2">
            <div class="col-lg-8 order-lg-1">
                <div class="comment0">
                        <h3 style="color: lightseagreen"> Thông Tin Người Dùng</h3>
                </div>
                @if (isset($msg))
                    <script type="text/javascript">alert("{{ $msg }}");</script>
                @endif
                <form class="form-horizontal" action="{{ route('booking') }}" enctype="multipart/form-data" method="post">
                    {{ csrf_field() }}
                    @if (isset($msg))
                        <script type="text/javascript">alert("{{ $msg }}");</script>
                    @endif
                <div class="panel panel-default">
                    <div class="row">
                        <div class="col-md-6">
                                <h6>Họ Và Tên: {{$user->fullname}}</h6>
                                <h6>Số Điện THoại: {{$user->phone}}</h6>
                                <h6>Biển Số Xe: {{$user->car}}</h6>
                                <h6>Tiền Hiện Có: {{$user->cost}} VNĐ</h6>
                                <input hidden name="number" type="number" value="{{$user->cost}}">
                            </div>
                        </div>
                    </div>
                <br>
                <div class="comment0">
                    <h3 style="color: lightseagreen"> Thông Tin Bãi</h3>
                    <div class="panel panel-default">
                        <div class="row">
                            <div class="col-md-6">
                                <h6>Tên: {{$park->parkName}}</h6>
                                <h6>Thành Phố: {{$park->city}}</h6>
                                <h6>Địa Chỉ: {{$park->address}}</h6>
                                <h6 >Giá: {{$park->price}} VNĐ</h6>
                                <h6 id="cost" hidden >{{$park->price}}</h6>
                                <img src="{!! asset('img/'.$park->img) !!}">
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            <div class="col-lg-4 order-lg-2">


                <div class="comment0">
                    <h3 style="color: lightseagreen"> Chi Tiết Đăng Ký</h3>
                </div>

                    <input hidden id="idPark" name="idPark" value="{{$park->idPark}}">
                <div class="panel panel-default">
                    <div class="row">
                        <div class="col-md-6">
                            <h6>Ngày Bắt Đầu </h6>
                            <div class="form-group" style="width: 200px">
                                    <input onblur="tongtien();" id="checkin" name="checkin"  class="form-control "   />
                            </div>
                            <h6>Ngày Kết Thúc </h6>
                            <div class="form-group" style="width: 200px">
                                    <input onblur="tongtien();" id="checkout"  name="checkout" class="form-control "  />
                            </div>
                            <h6>Biển Số Xe </h6>
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="radio" class="form-check-input" checked value="1" name="radio1">Mặc Định
                                    <input class="form-control" name="car1" type="text" readonly id="car1" value="{{$user->car}} ">

                                </label>
                            </div>

                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="radio" class="form-check-input" value="2" name="radio1">Mới
                                    <input class="form-control" name="car2" type="text" id="car2" value="">
                                </label>
                            </div>
                            <br>
                            <div >
                                <label id="price" for="txt206451" class="swatch_text" >Tổng Tiền: </label>
                                <input value="" hidden name="cost"  id="cost1">
                            </div>
                            <div class="col-lg-9">
                                <button  style="width: 200px"  type="submit" class="btn btn-info "> Đặt Chổ</button>


                            </div>
                             </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/js/bootstrap-datepicker.min.js"></script>
    <script >

        $("#checkin").datepicker({
            timepicker: false,
            format: 'dd-MM-yyyy'
        });

        $("#checkout").datepicker({
            timepicker: false,
            format:'dd-MM-yyyy'
        });
function tongtien() {
    var checkin=new Date( $('#checkin').val());
    var checkout=new Date( $('#checkout').val());
    var x=document.getElementById(
        "cost").innerHTML;
    const y = Number(x);
    if(checkin!=null && checkout!=null)
    {
        var  time=((checkout.getTime()-checkin.getTime())/(3600*1000*24))*y+1;

        if(time<0)
        {
            alert('Vui Lòng Nhập Lại Thời Gian Chính Xác');
        }
        else
        {
            document.getElementById(
                "price").innerHTML = "Tổng Tiền: "+time+" VNĐ";
            $("#cost1").val(time);
        }


    }

}

    </script>


@endsection

