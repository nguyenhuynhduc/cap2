<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class slotList extends Controller
{
    public function getSlotList()
    {
        return view('User/slotList');
    }
}
