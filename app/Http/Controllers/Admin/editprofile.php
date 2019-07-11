<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class editprofile extends Controller
{
    public function getEdit(Request $request)
    {
        $id = $request->get('id');
        $user = DB::table('user')->where('idUser', $id)->get();
        return view('Profile.editProfile')->with('user', $user);
    }

    public function postEdit(Request $request)
    {
        $id = $request->get('id');
        $password = $request->get('password');
        $name = $request->get('name');
        $car = $request->get('car');
        $user = DB::table('user')->where('idUser', $id)->get();
            DB::table('user')->where('idUser', $id)->update([
                'password' => $password,
                'fullname' => $name,
                'car' => $car,
            ]);
            return view('Profile.editProfile')->with('user', $user)->with('msg','edited successful' );
        }
}
