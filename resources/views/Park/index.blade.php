@extends('master')
@section('title')
    Park
@endsection
@section('contain')
    <section class="content-header">
        <h1>
            Park
        </h1>
        <a href="{{route('BT_addPark')}}">
        <button  class="btn btn-success pull-right" ><i class="fa fa-plus" aria-hidden="true"></i> ADD PARK </button>
        </a>
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
                                                    style="width: 182px; text-align: center">Address
                                            </th>
                                            <th
                                                    style="width: 199px; text-align: center">Cost
                                            </th>
                                            <th
                                                    style="width: 199px; text-align: center">Edit Park
                                            </th>
                                            <th
                                                    style="width: 199px; text-align: center">Edit Slot
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @foreach($list as $item)
                                            <tr role="row" class="odd">
                                                <td style="text-align: center">{{ $item->idPark }}</td>
                                                <td style="text-align: center">{{ $item->parkName }}</td>
                                                <td style="text-align: center">{{ $item->price }}</td>
                                                <td style="text-align: center"><a href="{{ route('BT_editInforPark') }}?id={{ $item->idPark }}"><i class="far fa-edit"></i></a></td>
                                                <td style="text-align: center"><a href="{{ route('BT_slot') }}?id={{ $item->idPark }}"><i class="far fa-edit"></i></a></td>
                                                <td style="text-align: center"><a href="{{ route('BT_deletePark') }}?id={{ $item->idPark }}"><i
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