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
        return response()->json($employeNumber);
        
    }
    function managerCount(){
        $managerNumber =User::where('role_id',2)->count();
        return response()->json($managerNumber);
        
    }
    function equipesCount(){
        $equipeNumber = Team::All()->count();
        return response()->json($equipeNumber);
        
    }
    function chartMethode(){
       $nbrPresence = planning::where('presence_type_id',1)->count()
       ->whereYear("created_at",date('Y'))
       ->groypBy(DB::raw("Month(created_at)"))
       ->pluckk('count',compact('userData'));
    }

}
