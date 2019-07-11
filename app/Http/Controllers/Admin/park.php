<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class park extends Controller
{
    public function listPark()
    {
        $allPark = DB::table('park')->get();

        return view('Park/index')->with('list', $allPark);
    }
    public function addPark()
    {
        return view('Park/addPark');
    }
    public function postAddPark(Request $request)
    {
        $parkName = $request->get('parkName');
        $address = $request->get('address');
        $price = $request->get('price');
        $lat=$request->get('lat');
        $lng=$request->get('lng');
        DB::table('park')->insert([
            'parkName'=>$parkName,
            'address'=>$address,
            'price'=>$price,
            'lat'=>$lat,
            'lng'=>$lng
        ]);

        $id=DB::table('park')->max('idPark');

        for ($i=1;$i<=30;$i++)
        {
            DB::table('slot')->insert([
            'idPark'=>$id,
                'status'=>'action',
                'slotName'=>'A'.$i
            ]);
        }

        return view('Park/addPark')->with('msg','Add success');
    }
    public function deletePark(Request $request)
    {
        $id = $request->get('id');
        DB::table('park')->where('idPark',$id)->delete();

        return redirect()->route('Park');
    }

    public function postInforPark(Request $request)
    {
        $id = $request->get('id');
        $allPark = DB::table('park')->where('idPark',$id)->get();
        return view('Park/editPark')->with('list', $allPark);
    }

    public function editInforPark(Request $request)
    {
        $id= $request->get('id');
        $parkName=$request->get('parkName');
        $price=$request->get('price');
        DB::table('park')->where('idPark',$id)->update([
            'parkName'=>$parkName,
            'price'=>$price,
        ]);
        $allPark = DB::table('park')->where('idPark',$id)->get();
        return view('Park/editPark')->with('list',$allPark)->with('msg','Update Success');
    }
}
