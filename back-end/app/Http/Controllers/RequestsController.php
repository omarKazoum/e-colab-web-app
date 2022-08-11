<?php

namespace App\Http\Controllers;

use App\Models\Role;
use http\Env\Response;
use Illuminate\Http\Request;
use \App\Models\Request as Demande;
class RequestsController extends Controller
{
    /**
     * if the user is a team membre return a list of the requests he cerated with response code 200
     * if the user is a manager return an array of requests that the members of his team have created with response code 200
     * else return ['error'=>'unauthorized'] with response code 411
     *return an array of the requests asociated with the user the
     * @return json string
     */
    function getAllMembre(){
            return response()->json(['requests' => \App\Models\Request::where('creator_id', auth()->user()->id)]);

    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    function getAllManager(){
        // retourner la liste des demandes de tous les membres de son équipe
        return response()->json(['requests' => \App\Models\Request::where('creator_id', auth()->user()->id)]);
    }

    /**
     * créer une demande
     * @return void
     */
    function create(){

    }
}
