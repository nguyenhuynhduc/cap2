<?php

namespace App\Http\Controllers\User;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class bookShort extends Controller
{
    public function getBookShort(Request $request)
    {
        $park=DB::table('park')->where('idPark',$request->get('id'))->get()->first();
        return view('User/bookShort')->with('park',$park)->with('id',$request->get('id'));
    }
    public function postBookShort(Request $request){
        $idPark=$request->get('idPark');
        $checkin=$request->get('checkin');
        $checkin1 = Carbon::parse($checkin);
        $checkin2=$checkin1->format('y-m-d');
        $checkout=$request->get('checkin');
        $checkout1 = Carbon::parse($checkout);
        $checkout2=$checkout1->format('y-m-d');
        $car=$request->get('car');
        $phone=$request->get('phone');
        $timeCheckIn=(integer)$request->get('timecheckin');
        $timecheckout=(integer)$request->get('timecheckout');
        $cost=(integer)$request->get('cost');
        $price=$request->get('number');

        $log1 = DB::table('log')->get();
        if ($log1) {
            $park2 = DB::table('park')
                ->join('slot', 'park.idPark', '=', 'slot.idPark')
                ->where('slot.status', 'action')
                ->where('park.idPark',$idPark)
                ->select('park.*', 'slot.idSlot')
                ->get();
            $count= count($park2);

            if($count>0)
                foreach ($park2 as $item4) {
                    foreach ($log1 as $item5) {
                        $check=$item5->datecheckin;
                        $check=Carbon::parse($check)->format('y-m-d');
                        if(($timeCheckIn>$item5->timecheckin && $timeCheckIn>$item5->timecheckout &&$timecheckout>$item5->timecheckin && $timecheckout>$item5->timecheckout )||($timeCheckIn<$item5->timecheckin && $timeCheckIn<$item5->timecheckout &&$timecheckout<$item5->timecheckin && $timecheckout<$item5->timecheckout) )
                            $an=1;
                        else
                            $an=2;
                        if ($item4->idPark == $item5->idPark && $an==2 && $check==$checkin2 )
                            $count -= 1;
                    }
                }
        }
        else{
            $park2 = DB::table('park')
                ->join('slot', 'park.idPark', '=', 'slot.idPark')
                ->where('slot.status', 'action')
                ->where('park.idPark',$idPark)
                ->select('park.*', 'slot.idSlot')
                ->get();

            $count= count($park2);
        }
        if ($count>0) {
                DB::table('log')->insert([
                    'idPark' => $idPark,
                    'datecheckin' => $checkin2,
                    'datecheckout' => $checkout2,
                    'timecheckin' =>$timeCheckIn,
                    'timecheckout' =>$timecheckout,
                    'Phone'=>$phone,
                    'car' => $car,
                ]);
                DB::table('history')->insert([
                    'idPark' => $idPark,
                    'datecheckin' => $checkin2,
                    'datecheckout' => $checkout2,
                    'checkin' =>$timeCheckIn,
                    'checkout' =>$timecheckout,
                    'Phone'=>$phone,
                    'car' => $car,
                    'Cost' => $cost,
                ]);
                Session()->flash('message', "Đăng Ký Thành Công");
                return redirect()->back();
        }
        else{
            Session()->flash('message', "Bãi Không Còn Chỗ Trống, Xin Vui Lòng Quay Lại Sau!");
            return redirect()->back();
        }
    }

    public function test(Request $request)
    {
        $checkin=$request->get('checkin');
        $checkin1 = Carbon::parse($checkin);
        $checkin3=$checkin1->format('y-m-d');

        $log=DB::table('log')->get()->first();
        $checkin2=$log->datecheckin;
        $checkin2=Carbon::parse($checkin2)->format('y-m-d');
        Session()->flash('message', $checkin2);
        return redirect()->back();
    }
}
