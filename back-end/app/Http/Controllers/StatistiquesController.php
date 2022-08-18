<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StatistiquesController extends Controller
{
    //

    function emloyeesCount(){
        //$data =  \App\Models\User::all()->cont()->where('role_id', 1);
        dd("    ");
        return response()->json([]);
        
    }
    function managerCount(){
        $data =  \App\Models\User::all()->where('role_id', 2);
        return response()->json([$data]);
        
    }
    function equipesCount(){
        $data =  \App\Models/Team::count();
        return response()->json([$data]);
        
    }

}
