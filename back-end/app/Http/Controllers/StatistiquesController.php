<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Team;
use App\Models\planning;
use Carbon\Carbon;
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
            $start_of_month= Carbon::now()->startOfMonth()->format('Y-m-d');
            $end_of_month=  Carbon::now()->endOfMonth()->format('Y-m-d');
            //presence
            $present=Planning::whereBetween('date', [ $start_of_month,$end_of_month])->where('presence_type_id', 2)->count();
            //absence
            $absent=Planning::whereBetween('date', [$start_of_month,$end_of_month])->where('presence_type_id', 3)->count();
            // taux de presence du mois data
            $data['taux_de_presence']=['presence'=>$present , 'absence'=>$absent];
            return response()->json($data);
    }

    

}
