<?php

namespace App\Http\Controllers;

use App\Models\Planning;
use App\Models\User;
use Carbon\Carbon;
use Dotenv\Validator;
use Illuminate\Http\Request;

class PlanningController extends Controller
{
    /**
     * @param $fromDate
     * @param $toDate
     * @return void
     */
    function managerGetPlanningForMyTeamInterval($fromDate, $toDate){

        /*// let's validate the date given
        $validator=Validator::make(['from_date'=>$fromDate,'to_date'=>$toDate]);
        $validator->after(function ($validator){
            dd($validator->validated());
        });
        $validator->validate();

        //teamMembersData
        $response['team_members']=User::where('team_id',auth()->team->id)->get();
        $planning=Planning::whereBetween('date',[Carbon::createFromFormat('Y-m-d',$fromDate),Carbon::createFromFormat('Y-m-d',$toDate)]);
        //foreach date (day)*/
        return response()->json('');
    }

    /**
     * @param $openSpaceId
     * @param $date
     * @return void
     */
    function managerGetOpenSpaceDataInDate($openSpaceId,$date){
        if($openSpaceId==='default'){
            //then return the data for the space to which belongs this team
        }else{
            //use the given space id to retrieve the data
        }
    }

    /**
     * @param $membreId
     * @param $date
     * @return void
     */
    function managerMakeAMMemberRemoteInDate($membreId, $date){

    }
    function managerMakeMemberInOfficeInDate($membreId, $date, $positionId){

    }
}
