<?php

namespace App\Http\Controllers;

use App\Models\Role;
use http\Env\Response;
use Illuminate\Http\Request;
use \App\Models\Request as Demande;
use Psy\Util\Json;

class RequestsController extends Controller
{
    /**
     * if the user is a team membre return a list of the requests he cerated with response code 200
     * if the user is a manager return an array of requests that the members of his team have created with response code 200
     * else return ['error'=>'unauthorized'] with response code 411
     * @return \Illuminate\Http\JsonResponse an array of the requests asociated with the user
     */
    function membreGetAll(){
            return response()->json( \App\Models\Request::all()->where('creator_id', auth()->user()->id));
    }


    /**
     * créer une demande pour un membre d'équipe
     * @return \Illuminate\Http\JsonResponse
     */
    function membreCreateRequest(Request $request){
        //TODO : validate use input and create the request for this user and then return the request object
        $validated=$request->validate(['field'=>'required','field2'=>'required']);
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
     * @return \Illuminate\Http\JsonResponse
     */
    function managerGetAll(){
        // retourner la liste des demandes de tous les membres de son équipe
        //TODO add cross team requests
        $requests=[];
        $teamMembersIds=User::where('team_id',auth()->user()->team->id)->pluck('id');
        if($teamMembersIds){
            $requests=App\Models\Request::whereIn('creator_id',$teamMembersIds)->get();
        }
        return response()->json([ $requests]);
    }

    /**
     * pour rejecter une demande par le chef d'équipe
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
