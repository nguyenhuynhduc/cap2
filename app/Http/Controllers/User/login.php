<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class login extends Controller
{
    public function getLogin()
    {
        return view('User/login');
    }

    public function postLogin(Request $request)
    {

        $username= $request->get('user');
        $pass=$request->get('pass');
        $user = DB::table('user')
            ->where('username', $username)
            ->where('password', $pass)
            ->first();
        if ($user) {
            session(['user' => $user]);

            return redirect()->intended();
        }
        else{
            return redirect()->back();
        }

    }
    public function getLogout()
    {
        session(['user' => null]);
        return redirect()->back();
    }
}
