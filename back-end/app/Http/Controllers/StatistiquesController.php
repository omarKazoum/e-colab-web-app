<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Team;
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

}
