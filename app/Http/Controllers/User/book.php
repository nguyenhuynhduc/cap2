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
        $id=$request->get('id');
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



       /* if ($price<$cost)
        {
            return redirect()->back()->with('msg', 'Tiền Không Đủ Vui Lòng Nạp Thêm');
        }
        else{*/
            DB::table('log')->insert([
                'idPark'=>$idPark,
                'idUser'=>$idUser,
                'datecheckin'=>$checkin2,
                'datecheckout'=>$checkout2,
                'car'=>$car,
            ]);
            DB::table('history')->insert([
                'idPark'=>$idPark,
                'idUser'=>$idUser,
                'datecheckin'=>$checkin2,
                'datecheckout'=>$checkout2,
                'car'=>$car,
                'Cost'=>$cost,
            ]);

            return redirect()->back()->with('msg', 'Đăng Ký Thành Công!');
      /*  }*/

    }
}
