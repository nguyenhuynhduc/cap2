@extends('masterUser')
@section('title')
    Đăng Ký Ngắn Hạn
@endsection
@section('contain')
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">

            <li class="breadcrumb-item"><a href="#">Trang Chủ</a></li>
            <li class="breadcrumb-item active" aria-current="page">Đăng Ký Ngắn Hạn </li>
        </ol>
    </nav>
    @if (Session()->has('message'))
        <script type="text/javascript">alert("{{ session()->get('message') }}");</script>
    @endif
    <form class="form-horizontal" autocomplete="off" action="{{ route('bookingShort') }}" enctype="multipart/form-data" method="post">
        {{ csrf_field() }}
    <div class="container">
        <div class="row my-2">
            <div class="col-lg-8 order-lg-1">
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
                <div class="form-check">
                    <label class="form-check-label">
                        <h6>Số Điện Thoại </h6>
                        <input class="form-control" name="phone" type="text" id="phone" value="">
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                        <h6>Biển Số Xe: </h6>
                        <input class="form-control" name="car" type="text" id="car" value="">
                    </label>
                </div>
                <h6>  &nbsp;  &nbsp;  &nbsp;Ngày: </h6>
                <div class="form-check" style="width: 220px">
                    <input  id="checkin" name="checkin"  class="form-control "   />
                </div>
                <div class="form-check" style="width: 220px">
                    <h6>Giờ Vào: </h6>
                    <select class="form-control" id="timecheckin" name="timecheckin">
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                    </select>
                </div>
                <div class="form-check" style="width: 220px">
                    <h6>Giờ Ra: </h6>
                    <select class="form-control" onblur="TongTien();"id="timecheckout" name="timecheckout">
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                    </select>
                </div>
                <div >
                    <input id="idPark" name="idPark" value="{{$park->idPark}}" hidden>
                    <label id="price" for="txt206451" class="swatch_text" >Tổng Tiền: </label>
                    <input value="" hidden name="cost"  id="cost1">
                </div>
                <div class="col-lg-9">
                    <button  style="width: 200px"  type="submit"  class="btn btn-info "> Đặt Chổ</button>
                </div>
            </div>
        </div>
    </div>
    </form>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/js/bootstrap-datepicker.min.js"></script>

    <script >

        $("#checkin").datepicker({
            timepicker: false,
            format: 'dd-MM-yyyy'
        });
        function TongTien() {

            const  timecheckin= Number($( "#timecheckin option:selected" ).text());
            const timecheckout = Number($( "#timecheckout option:selected" ).text());
            const cost = Number(document.getElementById(
                "cost").innerHTML);

            var tien=(timecheckout-timecheckin)*cost;
            if(timecheckout<=timecheckin)
                alert('Vui Lòng Nhập Chính Xác Thời Gian');
            else {
                document.getElementById(
                    "price").innerHTML = "Tổng Tiền: "+tien+" VNĐ";
                $("#cost1").val(tien);
            }
        }
        </script>
    @endsection