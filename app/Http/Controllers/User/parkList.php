<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class parkList extends Controller
{
    public function getParkList(Request $request)
    {
        $id=$request->get('id');
        $re=$request->get('re');
        if($id =='DN'){
            $place='Đà Nẵng';
            $city='Da Nang';
        }
        else if ( $id == 'HN')
        {
            $place='Hà Nội';
            $city='Ha Noi';
        }else if ($id=='HCM')
        {
            $place='Hồ Chí Minh';
            $city='Ho Chi Minh';
        }
        else
        {
            $place='';
        }
        if($id=='all')
        {
            if ($re ==null)
            {
                $list=DB::table('park')->get();
            }
            else{

                if($re==null)
                {
                    $list=DB::table('park')->get();
                }
                else{
                    $log=DB::table('park')
                        ->join('log', 'park.idPark', '=', 'log.idPark')
                        ->select('park.*','log.idSlot')
                        ->get();
                    if($log)
                    {
                        $park=DB::table('park')
                            ->join('slot', 'park.idPark', '=', 'slot.idPark')
                            ->where('slot.status','action')
                            ->select('park.*','slot.idSlot')
                            ->get();
                        $arr = [];
                        foreach ($park as $item1)
                        {
                            foreach ($log as $item2)
                            {
                                if ($item1->idSlot!=$item2->idSlot && $item1->idPark==$item2->idPark )
                                    break;
                            }
                            array_push($arr,$item1->idPark);
                        }
                        $list=DB::table('park')->whereIn('idPark',$arr)->get();
                    }
                    else
                        $list=DB::table('park')->get();
                }
            }
        }
        else{
            if($re==null)
            {
                $list=DB::table('park')->where('city',$city)->get();
            }
            else{
                $log=DB::table('park')
                    ->join('log', 'park.idPark', '=', 'log.idPark')
                    ->where('park.city',$city)
                    ->select('park.*','log.idSlot')
                    ->get();
                if($log)
                {
                    $park=DB::table('park')
                        ->join('slot', 'park.idPark', '=', 'slot.idPark')
                        ->where('park.city',$city)
                        ->where('slot.status','action')
                        ->select('park.*','slot.idSlot')
                        ->get();
                    $arr = [];
                    foreach ($park as $item1)
                    {
                        foreach ($log as $item2)
                        {
                            if ($item1->idSlot!=$item2->idSlot && $item1->idPark==$item2->idPark )
                                break;
                        }
                        array_push($arr,$item1->idPark);
                    }
                    $list=DB::table('park')->where('city',$city)->whereIn('idPark',$arr)->get();
                }
                else
                    $list=DB::table('park')->where('city',$city)->get();
            }
        }
        return view('User/parkList')->with('list',$list)->with('city',$place)->with('code',$id);
    }

}
