<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class deleteprofile extends Controller
{
    public function getDelete(Request $request)
    {
        $id = $request->get('id');
        DB::table('profile')->where('idProfile',$id)->delete();

        return redirect()->route('Profile');
    }
}
