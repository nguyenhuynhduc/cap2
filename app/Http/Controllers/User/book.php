<?php

namespace App\Http\Controllers\User;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
class book extends Controller
{
    public function getBook(Request $request)
    {
        if (session()->has('user'))
        {

            $user=DB::table('user')->where('idUser',session()->get('user'))->get()->first();
            $park=DB::table('park')->where('idPark',$request->get('id'))->get()->first();
            return view('User/book')->with('user',$user)->with('park',$park)->with('id',$request->get('id'));
        }
       else
           return view('User/login')->with('msg','Vui Lòng Đăng Nhập');
    }

    public function postBook(Request $request)
    {

        $idPark=$request->get('idPark');
        $idUser=session()->get('user');
        $checkin=$request->get('checkin');
        $checkin1 = Carbon::parse($checkin);
        $checkin2=$checkin1->format('y-m-d');
        $checkout=$request->get('checkout');
        $checkout1 = Carbon::parse($checkout);
        $checkout2=$checkout1->format('y-m-d');
        $cost=(integer)$request->get('cost');
        $price=$request->get('number');

        $radio=$request->get('radio1');
        if ($radio==1)
        $car=$request->get('car1');
        else
            $car=$request->get('car2');


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
                        if ($item4->idPark == $item5->idPark)
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
            if ($price < $cost) {
                Session()->flash('message', "Tiền Không Đủ Để Thanh Toán. Vui Lòng Nạp Thêm");
                return redirect()->back();
            }
            else {

                DB::table('log')->insert([
                    'idPark' => $idPark,
                    'idUser' => $idUser,
                    'datecheckin' => $checkin2,
                    'datecheckout' => $checkout2,
                    'car' => $car,
                ]);
                DB::table('history')->insert([
                    'idPark' => $idPark,
                    'idUser' => $idUser,
                    'datecheckin' => $checkin2,
                    'datecheckout' => $checkout2,
                    'car' => $car,
                    'Cost' => $cost,
                ]);
                Session()->flash('message', "Đăng Ký Thành Công");
                return redirect()->back();
            }
        }
        else{
                Session()->flash('message', "Bãi Không Còn Chỗ Trống, Xin Vui Lòng Quay Lại Sau!");
                return redirect()->back();
            }
    }


}
