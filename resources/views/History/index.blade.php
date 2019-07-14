@extends('master')
@section('title')
    History
@endsection
@section('contain')
    <section class="content-header">
        <h1>
            History
        </h1>
        <div style="float: right; padding-bottom: 5px">
            <form method="post" action=" {{route('searchWholeHistory')}}">
                {{ csrf_field() }}
                day <input name="day">
                month <input name="month">
                year <input name="year">
                <button type="submit"> search </button>
            </form>
        </div>
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
                                            <th tabindex="0" aria-controls="example1" rowspan="1"
                                                colspan="1" aria-sort="ascending"
                                                aria-label="Rendering engine: activate to sort column descending"
                                                style="width: 182px; text-align: center">ID History
                                            </th>
                                            <th  tabindex="0" aria-controls="example1" rowspan="1"
                                                 colspan="1" aria-label="Browser: activate to sort column ascending"
                                                 style="width: 224px;text-align: center">Customer
                                            </th>
                                            <th  tabindex="0" aria-controls="example1" rowspan="1"
                                                 colspan="1" aria-label="Browser: activate to sort column ascending"
                                                 style="width: 224px;text-align: center">City
                                            </th>
                                            <th  tabindex="0" aria-controls="example1" rowspan="1"
                                                 colspan="1" aria-label="Browser: activate to sort column ascending"
                                                 style="width: 224px;text-align: center">Slot
                                            </th>
                                            <th  tabindex="0" aria-controls="example1" rowspan="1"
                                                 colspan="1" aria-label="Platform(s): activate to sort column ascending"
                                                 style="width: 199px; text-align: center">Date
                                            </th>
                                            <th  tabindex="0" aria-controls="example1" rowspan="1"
                                                 colspan="1"
                                                 aria-label="Engine version: activate to sort column ascending"
                                                 style="width: 156px;text-align: center">Checkin
                                            </th>
                                            <th  tabindex="0" aria-controls="example1" rowspan="1"
                                                 colspan="1"
                                                 aria-label="Engine version: activate to sort column ascending"
                                                 style="width: 156px;text-align: center">Checkout
                                            </th>
                                            <th  tabindex="0" aria-controls="example1" rowspan="1"
                                                 colspan="1"
                                                 aria-label="Engine version: activate to sort column ascending"
                                                 style="width: 156px;text-align: center">Number Car
                                            </th>

                                            <th  tabindex="0" aria-controls="example1" rowspan="1"
                                                 colspan="1"
                                                 aria-label="Engine version: activate to sort column ascending"
                                                 style="width: 156px;text-align: center">Cost
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @foreach($history as $items)
                                            <tr role="row" class="odd">
                                                <td class="sorting_1" style="text-align: center">{{ $items->idHistory }}</td>
                                                <td style="text-align: center">{{ $items->fullname }}</td>
                                                <td style="text-align: center">{{ $items->parkName}}</td>
                                                <td style="text-align: center">{{ $items->slotName}}</td>
                                                <td style="text-align: center">{{ $items->date}}</td>
                                                <td style="text-align: center">{{ $items->checkin}}</td>
                                                <td style="text-align: center">{{ $items->checkout}}</td>
                                                <td style="text-align: center">{{ $items->car}}</td>
                                                <td style="text-align: center">{{ $items->Cost}}</td>
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
