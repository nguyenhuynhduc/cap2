<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class editslot extends Controller
{
    public function getEdit(Request $request)
    {
        $id = $request->get('id');
        $user = DB::table('slot')->where('idPark', $id)->get();
        return view('Slot.editSlot')->with('user', $user);
    }
    public function changeSlot(Request $request)
    {
        $id = $request->get('id');
        $user = DB::table('slot')->where('idSlot', $id)->get()->first();

            $idslot = $user->status;
            if ($idslot == 'action') {
                DB::table('slot')->where('idSlot', $id)->update([
                    'status' => 'empty',

                ]);
            } else {
                DB::table('slot')->where('idSlot', $id)->update([
                    'status' => 'action',

                ]);
            }


        return redirect()->back();
    }
}
