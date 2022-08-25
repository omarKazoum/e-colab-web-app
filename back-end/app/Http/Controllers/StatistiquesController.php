<?php

namespace App\Http\Controllers;

use App\Models\Position;
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
    function getPresenceChartData(){
            $start_of_month= Carbon::now()->startOfMonth()->format('Y-m-d');
            $end_of_month=  Carbon::now()->endOfMonth()->format('Y-m-d');

            $period = CarbonPeriod::create($start_of_month, $end_of_month);
            $presenceForMonth=[];
            foreach ($period as $day){
                $date=$day->format("y-m-d");
                //presence
                $present=Planning::where('date',$date )->where('presence_type_id', 2)->count();
                //absence
                $absent=Planning::where('date', $date)->where('presence_type_id', 3)->count();
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
    function getOccupationChartData(){
        //getting the start and end of the month
        $start_of_month= Carbon::now()->startOfMonth()->format('Y-m-d');
        $end_of_month=  Carbon::now()->endOfMonth()->format('Y-m-d');
        $period = CarbonPeriod::create($start_of_month, $end_of_month);
        $positionsCount=Position::all()->count();
        $occupationForMonth=[];
        foreach ($period as $day){
            //calculate porcentage of occupied positions for this day $day
            $date=$day->format("y-m-d");
            $tauxOccupationForToday=Planning::where('date',$date )->where('work_mode_id', 1)->count();
            $occupationForMonth[$day->format('d')]=round($tauxOccupationForToday,2);
        }
        // taux de presence du mois data
        $data['taux_d_occupation']=$occupationForMonth;
        return response()->json($data);
    }


}
