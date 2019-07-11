<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UseClass extends Controller
{
    public function searchDayMontYear($day,$month,$year,$historyDayMonth,$historyDayYear,$historyMonthYear,$historyDay,$historyMonth,$historyYear,$load,$historyall){

        $array = [];
        if(empty($month) && empty($day) && empty($year)){
            $array = [
                'result' => $load,
                'msg' => 'You have not entered values'
            ];
        }
        else if($day && $month && $year){
            $array = [
                'result' => $historyall,
                'msg' => null
            ];
        }
        else if(empty($year) && empty($day) && $month){
            $array = [
                'result' => $historyMonth,
                'msg' => 'you have not entered the day and year'
            ];
        }
        else if(empty($month) && $day && empty($year) ){
            $array = [
                'result' => $historyDay,
                'msg' => 'you have not entered the Month and year'
            ];
        }
        else if(empty($month) && $year && empty($day) ){
            $array = [
                'result' => $historyYear,
                'msg' => 'you have not entered the Day and Month'
            ];
        }
        else if($month && $day && empty($year)){
            $array = [
                'result' => $historyDayMonth,
                'msg' => 'you have not entered the  year'
            ];
        }
        else if($month && $year && empty($day)){
            $array = [
                'result' => $historyMonthYear,
                'msg' => 'you have not entered the  day'
            ];
        }
        else if($day && $year && empty($month)){
            $array = [
                'result' => $historyDayYear,
                'msg' => 'you have not entered the  Month'
            ];
        }
        return $array;
    }
}
