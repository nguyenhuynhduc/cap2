<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class selectPark extends Controller
{
    public function getDaNang()
    {
        $user =DB::table('park')->where('address','Đà Nẵng')->get();
        return view('User/selectDN')->with('list',$user);
    }
}
