<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Team;
use App\Models\planning;
class StatistiquesController extends Controller
{
    //

    function emloyeesCount(){
        $employeNumber =User::where('role_id',1)->count();
        return $employeNumber;

    }
    function managerCount(){
        $managerNumber =User::where('role_id',2)->count();
        return $managerNumber;
    }
    function equipesCount(){
        $equipeNumber = Team::All()->count();
        return $equipeNumber;

    }

    function getCardCounts(){
        $response['emloyeesCount']=$this->emloyeesCount();
        $response['managerCount']=$this->managerCount();
        $response['equipesCount']=$this->equipesCount();
        return response()->json($response);
    }

    // function chartMethode(){
    //    $nbrPresence = planning::where('presence_type_id',1)->count()
    //    ->whereYear("date",date('Y'))
    //    ->groypBy(DB::raw("Month(date)"))
    //    ->pluckk('count',compact('userData'));
    // }

}
