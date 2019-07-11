@extends('master')
@section('title')
    Park
@endsection
<style>
    .size{
        height: 50px;
        width: 50px;
    }
</style>
@section('contain')
    <section class="content-header">
        <h1>
            Edit Slot
        </h1>
    </section>

    <section class="content">
        <div class="row">
            <div class="col-xs-12">

                <!-- /.box -->
                @if (isset($msg))
                    <script type="text/javascript">alert("{{ $msg }}");</script>
                @endif
                <div class="grid-container">
                @foreach($user as $item)
                        <form method="post" action=" {{route('change_slot')}}?id={{ $item->idSlot }}"  method="post">
                            {{ csrf_field() }}
                    @if($item->status =='action')
                       <button type="submit"  class="btn btn-success size" style="background-color: green" >{{$item->slotName}}</button>

                        @else
                            <button type="submit" class="btn btn-success size" style="background-color: black " >{{$item->slotName}}</button>
                        @endif
                        </form>
                @endforeach
                </div>





            </div>
        </div>
    </section>

@endsection