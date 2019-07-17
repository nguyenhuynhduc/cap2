<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class account extends Controller
{
    public function getAccount()
    {
        if(session()->has('user'))
        {
            $user=DB::table('user')->where('idUser',session()->get('user'))->first();
            return view('User/account')->with('user',$user);
        }else
            return view('User/login');

    }

    public function postAccount(Request $request)
    {
        $request->validate([
            'fullname' => 'required|max:50',
            'email' => 'required',
            'phone' => 'required|min:10|max:10',
            'car' => 'required',
            'password' => 'required|min:6|max:16|required_with:confirmpassword|same:confirmpassword',
            'confirmpassword' => 'required',

        ], [
            'fullname.required' => 'Bạn Vui Lòng Nhập Họ Và Tên',
            'email.required' => 'Bạn Vui Lòng Nhập email',
            'phone.required' => 'Bạn Vui Lòng Nhập Số Điện Thoại',
            'car.required' => 'Bạn Vui Lòng Nhập Biển Số Xe',
            'password.required' => 'Bạn Vui Lòng Nhập Mật Khẩu',
            'confirmpassword.required' => 'Bạn Vui Lòng Nhập Xác Thực Mật Khẩu ',
            'password.same'=>'Vui Lòng Xác Thực Lại Mật Khẩu',
            'password.min'=>'Mật Khẩu phải trên 6 kí tự và nhỏ hơn 16 kí tự',
            'password.max'=>'Mật Khẩu phải trên 6 kí tự và nhỏ hơn 16 kí tự',
            'phone.min'=>'Số Điện Thoại Chỉ Nhận 10 số',
            'phone.max'=>'Số Điện Thoại Chỉ Nhận 10 số',
        ]);


        $id = $request->get('id');
        $fullname = $request->get('fullname');
        $email = $request->get('email');
        $phone = $request->get('phone');
        $car = $request->get('car');
        $gender = $request->get('gender');
        $password = $request->get('password');

        DB::table('user')->where('idUser',$id)->update([
            'fullname'=>$fullname,
            'email'=>$email,
            'phone'=>$phone,
            'car'=>$car,
            'gender'=>$gender,
            'password'=>$password
        ]);

        $user = DB::table('user')->where('idUser', session()->get('user'))->first();
        return view('User/account')->with('user', $user)->with('msg','Thay Đổi Thành Công');
    }
}
