@extends('master')
@section('title')
    Profile
@endsection
@section('contain')
    <section class="content-header">
        <h1>
          Profile
        </h1>
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="row">
            <div class="col-xs-12">

                <!-- /.box -->
                @if (isset($msg))
                    <script type="text/javascript">alert("{{ $msg }}");</script>
                @endif
                <div class="box">
                    <!-- /.box-header -->
                    <div class="box-body">
                        <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                            <div class="row">
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <table id="example1" class="table table-bordered table-striped dataTable"
                                           role="grid" aria-describedby="example1_info">
                                        <thead>
                                        <tr role="row">
                                            <th
                                                    style="width: 224px; text-align: center">ID
                                            </th>
                                            <th
                                                    style="width: 182px; text-align: center">Full Name
                                            </th>
                                            <th
                                                    style="width: 199px; text-align: center">Phone
                                            </th>
                                            <th
                                                    style="width: 156px; text-align: center">Email
                                            </th>
                                            <th
                                                    style="width: 156px; text-align: center">Car Number
                                            </th>
                                            <th
                                                    style="width: 156px; text-align: center">Information
                                            </th>
                                            <th
                                                    style="width: 156px; text-align: center">Edit
                                            </th>
                                            <th
                                                    style="width: 156px; text-align: center">Delete
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @foreach($list as $item)
                                            <tr role="row" class="odd">
                                                <td style="text-align: center">{{ $item->idUser }}</td>
                                                <td style="text-align: center">{{ $item->fullname }}</td>
                                                <td style="text-align: center">{{ $item->phone }}</td>
                                                <td style="text-align: center">{{ $item->email }}</td>
                                                <td style="text-align: center">{{ $item->car }}</td>
                                                <td style="text-align: center"><a href=""><i
                                                                class="fas fa-search"></i></a></td>
                                                <td style="text-align: center"><a href="{{ route('BT_edit') }}?id={{ $item->idUser }}"><i
                                                                class="far fa-edit"></i></a></td>
                                                <td style="text-align: center"><a href="{{ route('BT_delete') }}?id={{ $item->idUser }}"><i
                                                                class="fas fa-trash-alt"></i></a></td>
                                            </tr>
                                        @endforeach
                                        </tbody>
                                        <tfoot>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-7">
                                    <div class="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection