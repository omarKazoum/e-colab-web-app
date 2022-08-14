<?php

namespace App\Http\Controllers;

use App\Models\Planning;
use App\Models\Position;
use App\Models\RequestType;
use App\Models\Role;
use App\Models\User;
use http\Env\Response;
use Illuminate\Http\Request;
use \App\Models\Request as Demande;
use Illuminate\Support\Facades\Validator;
use Psy\Util\Json;

class RequestsController extends Controller
{
    /**
     * if the user is a team membre return a list of the requests he cerated with response code 200
     * else return ['error'=>'unauthorized'] with response code 401
     * @return \Illuminate\Http\JsonResponse an array of the requests associated with the user
     */
    function memberGetAll(): \Illuminate\Http\JsonResponse
    {
            return response()->json( \App\Models\Request::all()->where('creator_id', auth()->user()->id));
    }

    /**
     * créer une demande pour un membre d'équipe
     * @return \Illuminate\Http\JsonResponse
     */
    function membreCreateRequest(Request $request): \Illuminate\Http\JsonResponse
    {
        //TODO : validate user input and create the request for this user and then return the request object
        //creating a regex for request type validation
       /* $requestTypes=RequestType::all()->pluck('id');
        $requestTypesRegex="/";
        for ($i=0;$i<count($requestTypes) ; $i++) {
            $requestTypesRegex.="(^".$requestTypes[$i]."$)";
            if($i!==count($requestTypes)-1)
                $requestTypesRegex.="|";
        }
        $requestTypesRegex.="/i";
       */ //validating position

        $validator=Validator::make($request->all(),
            ['request_type'=>"required",
                'position_id'=>'required_if:request_type,1',
                'date'=>'required|date|after_or_equal:'.now()]);
            $validator->after(function($validator){
                    $validated=$validator->validated();
                    if(!RequestType::all()->pluck('id')->contains($validated['request_type'])){
                        $validator->errors()->add('request_type','invalid request type !');
                    }
                    //TODO: continue this

                    if(isset($validator->validated()['position_id'])){
                        $position=Position::find($validated['position_id']);
                        if(!$position OR ($position->is_available==0 OR Planning::where('date',$validated['date'])->where('position_id',$validated['position_id'])->count()>0)){

                            $validator->errors()->add('position_id','position is already taken');
                        }

            }
        });
        $validator->validate();
        return response()->json(['message'=>'demande bien créer']);
    }

    /**
     * annuler une demande pour un membre
     * @return \Illuminate\Http\JsonResponse
     */
    function membreCancelRequest($requestId){
        //TODO:: cancel the request with this if the user is the creator and it's not already accepted or denied
        dd($requestId);
        return response()->json(['message'=>'demande bien annulée']);
    }


    /**
     * retourner la liste des demandes de tous les membres de son équipe
     * @return \Illuminate\Http\JsonResponse
     */
    function managerGetAll(){
        $requests=[];
        $teamMembersIds=User::where('team_id',auth()->user()->team->id)->pluck('id');
        if($teamMembersIds){
            $requests=\App\Models\Request::whereIn('creator_id',$teamMembersIds)->get();
        }
        $crossTeamRequests=\App\Models\Request::whereIn('position_id',auth()->user()->team->positions->pluck('id'))->get();
        $requests=$requests->merge($crossTeamRequests)->unique();
        return response()->json([ $requests]);
    }

    /**
     * pour refuser une demande par le chef d'équipe
     * @return \Illuminate\Http\JsonResponse
     */
    function managerRejectRequest($requestId){
            //TODO:: implement this
            return response()->json(['message'=>'demande bien refusée']);
        }
    /**
     * pour confirmer une demande par le chef d'équipe
     * @return \Illuminate\Http\JsonResponse
     */
    function managerConfirmRequest($requestId){
            dd($requestId);
            //TODO:: implement this
            return response()->json(['message'=>'demande bien confirmée']);
        }

}
