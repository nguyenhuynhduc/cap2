@extends('master')
@section('title')
    Edit Account
@endsection
@section('contain')
    <section class="content-header">
        <h1>
            Edit Profile
        </h1>
        <ol class="breadcrumb">
            <li class="active">Edit Profile</li>
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
                    @foreach($user as $items)
                        <form class="form-horizontal" action="{{ route('edit') }}?id={{ $items->idUser }}" enctype="multipart/form-data" method="post">
                            {{ csrf_field() }}
                            <div class="box-body">
                                <div class="form-group">
                                    <label for="id" class="col-sm-2 control-label">ID</label>

                                    <div class="col-sm-10">
                                        <label for="id" class="col-sm-2 control-label"
                                               style="width: 200px; ">{{ $items->idUser }}</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="password" class="col-sm-2 control-label">Username</label>
                                    <div class="col-sm-10">
                                        <label for="id" class="col-sm-2 control-label">{{ $items->username }}</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="name" class="col-sm-2 control-label">Password</label>
                                    <div class="col-sm-10">
                                        <input type="password" name="password" required class="form-control" id="name"
                                               placeholder="Password">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="password" class="col-sm-2 control-label">Full Name</label>
                                    <div class="col-sm-10">
                                        <input type="name" name="name" required class="form-control"
                                               value="{{ $items->fullname }}" id="password" placeholder="Password">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="password" class="col-sm-2 control-label">Car Number</label>
                                    <div class="col-sm-10">
                                        <input type="name" name="car" required class="form-control"
                                               value="{{ $items->car }}" id="password" placeholder="Password">
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