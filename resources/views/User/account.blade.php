@extends('masterUser')
@section('title')
    Profile
@endsection
@section('contain')

    @if (isset($msg))
        <script type="text/javascript">alert("{{ $msg }}");</script>
    @endif

    @if ($errors->any())
                @foreach ($errors->all() as $error)
                    <script type="text/javascript">alert("{{ $error }}");</script>
                    @break
                @endforeach
    @endif
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Trang Chủ</a></li>
            <li class="breadcrumb-item active" aria-current="page">Người Dùng </li>
        </ol>
    </nav>

    <div class="container">
        <div class="row my-2">
            <div class="col-lg-8 order-lg-2">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a href="" data-target="#profile" data-toggle="tab" class="nav-link active">Thông Tin</a>
                    </li>
                    <li class="nav-item">
                        <a href="" data-target="#edit" data-toggle="tab" class="nav-link">Chỉnh Sửa</a>
                    </li>
                </ul>
                <div class="tab-content py-4">
                    <div class="tab-pane active" id="profile">
                        <h5 class="mb-3">Thông Tin</h5>
                        <div class="row">
                            <div class="col-md-6">
                                <h6>Họ Và Tên</h6>
                                <p>
                                    {{$user->fullname}}
                                </p>
                                <h6>Số Điện THoại</h6>
                                <p>
                                    {{$user->phone}}
                                </p>
                                <h6>Biển Số Xe</h6>
                                <p>
                                    {{$user->car}}
                                </p>
                            </div>
                            <div class="col-md-6">
                                <h6>Email</h6>
                                <p>
                                    {{$user->email}}
                                </p>
                                <h6>Giới Tính</h6>
                                <p>
                                    @if($user->gender==1)
                                        Nam
                                        @else
                                        Nữ
                                        @endif
                                </p>
                                <h6>Tiền Dư</h6>
                                <p>
                                    {{$user->cost}} VNĐ
                                </p>
                            </div>

                        </div>
                        <!--/row-->
                    </div>
                    <div class="tab-pane" id="edit">

                        <form class="form-horizontal" action="{{ route('editaccount') }}" enctype="multipart/form-data" method="post">
                            {{ csrf_field() }}
                            <div class="form-group row">
                                <input id="id" name="id" value="{{$user->idUser}}" hidden>
                                <label class="col-lg-3 col-form-label form-control-label">Họ Và Tên</label>
                                <div class="col-lg-9">
                                    <input class="form-control" name="fullname" type="text" id="fullname" value=" {{$user->fullname}}">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Email</label>
                                <div class="col-lg-9">
                                    <input class="form-control"name="email" id="email" type="email" value=" {{$user->email}}">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Điện Thoại</label>
                                <div class="col-lg-9">
                                    <input class="form-control" name="phone" type="text" id="phone" value=" {{$user->phone}}">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Biển Số Xe</label>
                                <div class="col-lg-9">
                                    <input class="form-control"name="car" type="text" id="car" value=" {{$user->car}}">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Giới Tính</label>
                                <div class="col-lg-9">
                                    <select id="gender" name="gender" class="form-control" size="0">
                                        <option value="1">Nam</option>
                                        <option value="0">Nữ</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Tài Khoản</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="text" readonly value=" {{$user->username}}">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Mật Khẩu</label>
                                <div class="col-lg-9">
                                    <input class="form-control"  id="password" name="password" type="password" >
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Nhập Lại Mật Khẩu</label>
                                <div class="col-lg-9">
                                    <input class="form-control" id="confirmpassword" name="confirmpassword" type="password" >
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label"></label>
                                <div class="col-lg-9">
                                    <button type="submit" class="btn btn-info "> Save Changes</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {{--<div class="col-lg-4 order-lg-1 text-center">
                <img src="//placehold.it/150" class="mx-auto img-fluid img-circle d-block" alt="avatar">
                <h6 class="mt-2">Hình Đại Diện</h6>
                <label class="custom-file">
                    <input type="file" id="file" class="custom-file-input">
                    <span class="custom-file-control">Chọn Ảnh</span>
                </label>
            </div>--}}

        </div>
    </div>
    @endsection
