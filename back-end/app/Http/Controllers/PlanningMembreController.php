<?php

namespace App\Http\Controllers;

use App\Models\Planning;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PlanningMembreController extends Controller
{
    //
    function membreGetPlanningInterval($fromDate,$toDate){
        $validator=Validator::make(['from_date'=>$fromDate,'to_date'=>$toDate],['from_date'=>"regex:".PlanningManagerController::DATE_REGEX,'to_date'=>"regex:".PlanningManagerController::DATE_REGEX]);
        $validator->validate();
        $response['plannings']=Planning::whereBetween('date',[Carbon::createFromFormat('Y-m-d',$fromDate),
            Carbon::createFromFormat('Y-m-d',$toDate)])->where('user_id',auth()->user()->id)->with('position','user:first_name,last_name,id,email','presenceType','workMode')->get();
        return response()->json($response);
    }
}
