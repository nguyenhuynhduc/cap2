@extends('master')
@section('title')
   ADD PARK
@endsection
@section('contain')
    <section class="content-header">
        <h1>
           ADD PARK
        </h1>
        <ol class="breadcrumb">
            <li class="active">ADD PARK</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="row">
            <!-- right column -->
            <div class="col-md-12">
                <!-- Horizontal Form -->
                <div class="box box-info  ">
                    <div class="box-header with-border">
                    </div>
                    @if (isset($msg))
                        <script type="text/javascript">alert("{{ $msg }}");</script>
                    @endif
                        <form class="form-horizontal" action="{{route('addPark')}}" enctype="multipart/form-data" method="post">
                            {{ csrf_field() }}
                            <div class="box-body">
                                <div class="form-group">
                                    <label for="id" class="col-sm-2 control-label">Park Name</label>
                                    <div class="col-sm-10">
                                    <input type="parkName" name="parkName" required class="form-control"
                                           value="" id="parkName" placeholder="Park Name">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="Gender" class="col-sm-2 control-label">Address</label>
                                    <div class="col-sm-10">
                                        <select name="address" class="gender">
                                            <option value="Da Nang">Đà Nẵng</option>
                                            <option value="Ha Noi">Hà Nội</option>
                                            <option value="Ho Chi Minh">Hồ Chí Minh</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="name" class="col-sm-2 control-label">Price</label>
                                    <div class="col-sm-10">
                                        <input type="name" name="price" required class="form-control"
                                               value="" id="price" placeholder="Price">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="name" class="col-sm-2 control-label">Lat</label>
                                    <div class="col-sm-10">
                                        <input type="name" name="lat" required class="form-control"
                                               value="" id="lat" placeholder="Lat">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="name" class="col-sm-2 control-label">Lng</label>
                                    <div class="col-sm-10">
                                        <input type="name" name="lng" required class="form-control"
                                               value="" id="lng" placeholder="Lng">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-offset-2 col-sm-10">
                                        <div class="checkbox">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.box-body -->
                            <div class="box-footer">
                                <button type="submit" class="btn btn-info pull-right">Agree</button>
                            </div>
                            <!-- /.box-footer -->
                        </form>

                </div>
                <div class="box box-warning">
                </div>
            </div>
            <!--/.col (right) -->
        </div>
        <!-- /.row -->
    </section>
@endsection