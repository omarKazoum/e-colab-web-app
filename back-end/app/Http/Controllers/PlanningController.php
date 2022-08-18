<?php

namespace App\Http\Controllers;

use App\Models\OpenSpace;
use App\Models\Planning;
use App\Models\Position;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PlanningController extends Controller
{
    const  DATE_REGEX="/\d{4}-\d{2}\-\d{2}/";

    function managerGetPlanningForMyTeamInterval($fromDate, $toDate){
        //now displaying all planning rows that are related to this manager's team in the given date interval
        // let's validate the date given
        $validator=Validator::make(['from_date'=>$fromDate,'to_date'=>$toDate],['from_date'=>"regex:".PlanningController::DATE_REGEX,'to_date'=>"regex:".PlanningController::DATE_REGEX]);
        $validator->validate();
        //teamMembersData
        $response['team_members']=User::where('team_id',auth()->user()->team->id)->get();
        $response['plannings']=Planning::whereBetween('date',[Carbon::createFromFormat('Y-m-d',$fromDate),Carbon::createFromFormat('Y-m-d',$toDate)])->whereIn('user_id',$response['team_members']->pluck('id'))->with('position','user:first_name,last_name,id,email')->get();
        return response()->json($response);
    }

    /**
     * @param $openSpaceId
     * @param $date
     * @return void
     * @throws \Illuminate\Validation\ValidationException
     */
    function managerGetOpenSpaceDataInDate($openSpaceId,$date){
        $openSpaceId= $openSpaceId==='default'?auth()->user()->team->positions->first()->openSpace->id:$openSpaceId;
        $validator=Validator::make(['open_space_id'=>$openSpaceId,'date'=>$date],['open_space_id'=>['required',"regex:/^\d+$/"],'date'=>"regex:".PlanningController::DATE_REGEX]);
        $validator->after(function($validator){
            if(!OpenSpace::find($validator->validated()['open_space_id'])){
                $validator->errors()->add('open_space_id','invalid open space id !');
            }
        });

        $validator->validate();
        $openSpace=OpenSpace::find($openSpaceId);
        $planning=Planning::where('date',$date)->whereIn('position_id',$openSpace->positions->pluck('id'))->with(['workMode','position','presenceType','user:id,first_name,last_name,email,role_id'])->get();
        $response['open_space']=$openSpace;
        $response['plannings']=$planning;
        return response()->json($response);

    }

    /**
     * @param $membreId
     * @param $date
     * @return void
     */
    function managerMakeAMMemberRemoteInDate($membreId, $date){
        $validator=Validator::make(['membre_id'=>$membreId,'date'=>$date],['date'=>['required',"regex:".self::DATE_REGEX],'membre_id'=>'required']);
        $validator->after(function($validator){
            $validated=$validator->validated();
            if(!User::find($validated['membre_id'])){
                $validator->errors()->add('membre_id','invalid open membre id !');
            }
        });
        $validator->validate();

        // if the mamanger has an existing plan for this day and member let's change it and else we will add a new one

        if(Planning::where('date',$date)->where('user_id',$membreId)->count()>0){
            $p=Planning::where('date',$date)->where('user_id',$membreId)->first();
            $p->work_mode_id=2;
            $p->save();
        }else{
            $p = new Planning();
            $p->date = Carbon::createFromFormat('Y-m-d',$date);
            $p->work_mode_id=2;
            $p->position_id=1;
            $p->user_id=$membreId;
            $p->presence_type_id=1;
            $p->save();
        }
        return response()->json(['message'=>'cette utilisateur est désormais en télétravail!']);
    }
    function managerMakeMemberInOfficeInDate($membreId, $date, $positionId){
        $validator=Validator::make(['membre_id'=>$membreId,'date'=>$date,'position_id'],['date'=>['required',"regex:".self::DATE_REGEX],'membre_id'=>'required','position_id'=>'required|numeric']);
        $validator->after(function($validator){
            $validated=$validator->validated();
            if(!User::find($validated['membre_id'])){
                $validator->errors()->add('membre_id','invalid open membre id !');
            }
            if(!Position::where('id',$validated['position_id'])->count()>0){
                $validator->errors()->add('position_id','invalid position id !');
            }else{
                $planningForthisDayForThisPosition=Planning::where('date',)
            }
        });
        $validator->validate();

        // if the mamanger has an existing plan for this day and member let's change it and else we will add a new one

        if(Planning::where('date',$date)->where('user_id',$membreId)->count()>0){
            $p=Planning::where('date',$date)->where('user_id',$membreId)->first();
            $p->work_mode_id=2;
            $p->save();
        }else{
            $p = new Planning();
            $p->date = Carbon::createFromFormat('Y-m-d',$date);
            $p->work_mode_id=2;
            $p->position_id=1;
            $p->user_id=$membreId;
            $p->presence_type_id=1;
            $p->save();
        }
        return response()->json(['message'=>'cette utilisateur est désormais en présentiel!']);
    }
}
