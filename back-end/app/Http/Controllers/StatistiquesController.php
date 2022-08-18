<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Team;
class StatistiquesController extends Controller
{
    //

    function emloyeesCount(){
        $p =User::where('role_id',1)->count();
        return response()->json($p);
        
    }
    function managerCount(){
        $p =User::where('role_id',2)->count();
        return response()->json($p);
        
    }
    function equipesCount(){
       $p = Team::All()->count();
        return response()->json($p);
        
    }

}
