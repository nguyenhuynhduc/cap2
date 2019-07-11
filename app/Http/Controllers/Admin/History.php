<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class History extends Controller
{
    protected $useClass;
    public function __construct(UseClass $useClass)
    {
        $this->useClass = $useClass;
    }
    public function valueHistory(){
        $history = DB::table('history')
        ->join('park', 'park.idPark', '=', 'history.idHistory')
            ->join('slot', 'slot.idSlot', '=', 'history.idHistory')
            ->join('user', 'user.idUser', '=', 'history.idHistory')
            ->select('history.*', 'slot.slotName', 'park.parkName','user.fullname')
            ->get();
        return $history;
    }
    public function getAllHistory()
    {
        return view('History/index')->with('history', $this->valueHistory());
    }

    public function searchHistory(Request $request){
        $day = $request->get('day');
        $month = $request->get('month');
        $year = $request->get('year');



        $historyMonthYear = DB::table('history')
            ->join('park', 'park.idPark', '=', 'history.idHistory')
            ->join('slot', 'slot.idSlot', '=', 'history.idHistory')
            ->join('user', 'user.idUser', '=', 'history.idHistory')
            ->select('history.*', 'slot.slotName', 'park.parkName','user.fullname')
            ->whereYear('date',$year)
            ->whereMonth('date',$month)->get();

        $historyDayMonth = DB::table('history')
            ->join('park', 'park.idPark', '=', 'history.idHistory')
            ->join('slot', 'slot.idSlot', '=', 'history.idHistory')
            ->join('user', 'user.idUser', '=', 'history.idHistory')
            ->select('history.*', 'slot.slotName', 'park.parkName','user.fullname')
            ->whereDay('date',$day)
            ->whereMonth('date',$month)->get();

        $historyDayYear = DB::table('history')
            ->join('park', 'park.idPark', '=', 'history.idHistory')
            ->join('slot', 'slot.idSlot', '=', 'history.idHistory')
            ->join('user', 'user.idUser', '=', 'history.idHistory')
            ->select('history.*', 'slot.slotName', 'park.parkName','user.fullname')
            ->whereYear('date',$year)
            ->whereDay('date',$day)->get();

        $historyYear = DB::table('history')
            ->join('park', 'park.idPark', '=', 'history.idHistory')
            ->join('slot', 'slot.idSlot', '=', 'history.idHistory')
            ->join('user', 'user.idUser', '=', 'history.idHistory')
            ->select('history.*', 'slot.slotName', 'park.parkName','user.fullname')
            ->whereYear('date',$year)->get();

        $historyMonth = DB::table('history')
            ->join('park', 'park.idPark', '=', 'history.idHistory')
            ->join('slot', 'slot.idSlot', '=', 'history.idHistory')
            ->join('user', 'user.idUser', '=', 'history.idHistory')
            ->select('history.*', 'slot.slotName', 'park.parkName','user.fullname')
            ->whereMonth('date',$month)->get();

        $historyDay = DB::table('history')
            ->join('park', 'park.idPark', '=', 'history.idHistory')
            ->join('slot', 'slot.idSlot', '=', 'history.idHistory')
            ->join('user', 'user.idUser', '=', 'history.idHistory')
            ->select('history.*', 'slot.slotName', 'park.parkName','user.fullname')
            ->whereDay('date',$day)->get();

        $historyall = DB::table('history')
            ->join('park', 'park.idPark', '=', 'history.idHistory')
            ->join('slot', 'slot.idSlot', '=', 'history.idHistory')
            ->join('user', 'user.idUser', '=', 'history.idHistory')
            ->select('history.*', 'slot.slotName', 'park.parkName','user.fullname')
            ->whereYear('date',$year)
            ->whereMonth('date',$month)
            ->whereDay('date',$day)
            ->get();
        $arr = $this->useClass->searchDayMontYear($day,$month,$year,$historyDayMonth,$historyDayYear,$historyMonthYear,$historyDay,$historyMonth,$historyYear,$this->valueHistory(),$historyall);
        $msg = Arr::get($arr, 'msg');
        $result =[];
        $result =Arr::get($arr, 'result');
        if(Arr::get($arr, 'msg') == null)
            return view('History/index')->with('history',$result);
        return view('History/index')->with('history',$result)->with('msg',$msg);
    }
}
