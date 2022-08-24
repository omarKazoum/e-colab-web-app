<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Carbon\CarbonPeriod;
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
    function chartMethode(){
            $start_of_month= Carbon::now()->startOfMonth()->format('Y-m-d');
            $end_of_month=  Carbon::now()->endOfMonth()->format('Y-m-d');

            $period = CarbonPeriod::create($start_of_month, $end_of_month);
            $presenceForMonth=[];
            foreach ($period as $day){
                //presence
                $present=Planning::whereBetween('date', [ $start_of_month,$end_of_month])->where('presence_type_id', 2)->count();
                //absence
                $absent=Planning::whereBetween('date', [$start_of_month,$end_of_month])->where('presence_type_id', 3)->count();
                $total=($absent+$present);
                if($total<=0){
                    $tauxPresence=0;
                }else{
                    $tauxPresence=round(($present/$total)*100,2);
                }
                $presenceForMonth[$day->format('d')]=$tauxPresence;
            }
            // taux de presence du mois data
            $data['taux_de_presence']=$presenceForMonth;
            return response()->json($data);
    }



}
