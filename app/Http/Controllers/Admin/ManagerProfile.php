<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class ManagerProfile extends Controller
{
    public function listAccount()
    {
        $allAccount = DB::table('user')->get();
        return view('Profile/index')->with('list', $allAccount);
    }
    public  function getViewProfile(){

    }
}
