@extends('master')
@section('title')
    Edit Park
@endsection
@section('contain')
    <section class="content-header">
        <h1>
            Edit Park
        </h1>
        <ol class="breadcrumb">
            <li class="active">Edit Park</li>
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
                    @foreach($list as $items)
                        <form class="form-horizontal" action="{{ route('editPark') }}?id={{ $items->idPark }}" enctype="multipart/form-data" method="post">
                            {{ csrf_field() }}
                            <div class="box-body">

                                <div class="form-group">
                                    <label  class="col-sm-2 control-label">Park Name</label>
                                    <div class="col-sm-10">
                                        <input type="name" name="parkName" required class="form-control"
                                               value="{{ $items->parkName }}" id="parkName" placeholder="parkName">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="password" class="col-sm-2 control-label">Price</label>
                                    <div class="col-sm-10">
                                        <input type="name" name="price" required class="form-control"
                                               value="{{ $items->price }}" id="price" placeholder="Price">
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
                    @endforeach
                </div>
                <div class="box box-warning">
                </div>
            </div>
            <!--/.col (right) -->
        </div>
        <!-- /.row -->
    </section>
@endsection