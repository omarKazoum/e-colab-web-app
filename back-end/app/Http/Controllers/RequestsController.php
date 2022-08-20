<?php

namespace App\Http\Controllers;

use App\Models\Planning;
use App\Models\Position;
use App\Models\RequestStatus;
use App\Models\RequestType;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class RequestsController extends Controller
{
    /**
     * if the user is a team member return a list of the requests he cerated with response code 200
     * else return ['error'=>'unauthorized'] with response code 401
     * @return \Illuminate\Http\JsonResponse an array of the requests associated with the user
     */
    function memberGetAll(): \Illuminate\Http\JsonResponse
    {
            return response()->json( \App\Models\Request::where('creator_id', auth()->user()->id)->with(['type','status','creator'])->get());
    }

    /**
     * créer une demande pour un membre d'équipe
     * @return \Illuminate\Http\JsonResponse
     */
    function membreCreateRequest(Request $request): \Illuminate\Http\JsonResponse
    {
        $validator=Validator::make($request->all(),
            ['type_id'=>"bail|required",
                'position_id'=>'bail|required_if:type_id,1',
                'date'=>'bail|required|date|after_or_equal:'.now()]);
            $validator->after(function($validator){
                    $validated=$validator->validated();
                    if(isset($validated['type_id']) AND !RequestType::all()->pluck('id')->contains($validated['type_id'])){
                        $validator->errors()->add('type_id','invalid request type !');
                    }
                    //validating the position chosen in the request
                    if(isset($validated['position_id'])){
                        //let's first check that position actually exists
                        $position=Position::find($validated['position_id']);
                        // if the user wants to work on site and there is not already a pending request for this position at the given date and that the given position is available
                        if(!$position OR ($position->is_available==0
                                OR Planning::where('date',$validated['date'])->where('position_id',$validated['position_id'])->count()>0)){
                            $validator->errors()->add('position_id','position is already taken');
                        }
            }
        });
        $validator->validate();
        //if the data is valid let's create the request
        $planningRequest=new \App\Models\Request;
        $planningRequest->created_at=now();
        $planningRequest->creator_id=auth()->user()->id;
        $planningRequest->type_id=$request->input('type_id');
        $planningRequest->position_id=$request->input('position_id');
        // let's make the newly created request in pending  for now
        $planningRequest->request_status_id=2;
        $planningRequest->updated_at=now();
        //dd($request->input('type_id'));
        $planningRequest->save();
        return response()->json(['message'=>'demmande bien crée']);
    }

    /**
     * annuler une demande pour un membre
     * @return \Illuminate\Http\JsonResponse
     */
    function membreCancelRequest($requestId){
        $validator=Validator::make(['request_id'=>$requestId],['request_id'=>'required']);
        $validator->after(function( $validator){
            $validated=$validator->validated();
            //if the request id is valid and it's not yet accepted or rejected

            $request=isset($validated['request_id'])?\App\Models\Request::find($validated['request_id']): false;
            if(!$request){
                $validator->errors()->add('request_id','invalid request id !');
                return;
            }
            if(!$request->creator_id==\auth()->user()->id){
                $validator->errors()->add('request_id','unauthorized!');
            };
            if($request->request_status_id!=\App\Models\Request::REQUEST_STATUS_PENDING){
                $validator->errors()->add('request_id','request already '.$request->status->label.'!');
            }
        });
        $validator->validate();
        \App\Models\Request::find($requestId)->cancel();
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
        $crossTeamRequests=\App\Models\Request::whereIn('position_id',auth()->user()->team->positions->pluck('id'))->with('type','status','creator')->get();
        $requests=$requests->merge($crossTeamRequests)->unique();
        return response()->json([ $requests]);
    }

    /**
     * pour refuser une demande par le chef d'équipe
     * @return \Illuminate\Http\JsonResponse
     */
    function managerRejectRequest($requestId){
            //check that the request is for the group of this manager or any position that belongs to this group and that the request is not yet canceled
            $validator=Validator::make(['request_id'=>$requestId],['request_id'=>'required']);
            $validator->after(function( $validator){
                $validated=$validator->validated();
                //if the request id is valid and it's not yet accepted or rejected
                 $request=isset($validated['request_id'])?\App\Models\Request::find($validated['request_id']): false;
                if(!$request){
                    $validator->errors()->add('request_id','invalid request id !');
                    return;
                }
                if(!$request->isForManager(Auth::user())){
                    $validator->errors()->add('request_id','unauthorized !');
                    return;
                }
                ///if the request is already canceled
                if($request->request_status_id == \App\Models\Request::REQUEST_STATUS_CANCELED){
                    $validator->errors()->add('request_id','unauthorized !');
                    return;
                }
            });
            $validator->validate();
            \App\Models\Request::find($requestId)->reject();
            return response()->json(['message'=>'demande bien refusée']);
        }
    /**
     * pour confirmer une demande par le chef d'équipe
     * @return \Illuminate\Http\JsonResponse
     */
    function managerConfirmRequest($requestId){
            //check that the request is for the group of this manager or any position that belongs to this group and that the request is not yet canceled
            $validator=Validator::make(['request_id'=>$requestId],['request_id'=>'required']);
            $validator->after(function( $validator){
                $validated=$validator->validated();
                //if the request id is valid and it's not yet accepted or rejected
                $request=isset($validated['request_id'])?\App\Models\Request::find($validated['request_id']): false;
                if(!$request){
                    $validator->errors()->add('request_id','invalid request id !');
                    return;
                }
                if(!$request->isForManager(\auth()->user())){
                    $validator->errors()->add('request_id','unauthorized !');
                    return;
                }
                ///if the request is already canceled
                if($request->request_status_id == \App\Models\Request::REQUEST_STATUS_CANCELED){
                    $validator->errors()->add('request_id','unauthorized !');
                    return;
                }
            });
            $validator->validate();
            \App\Models\Request::find($requestId)->confirm();
            return response()->json(['message'=>'demande bien confirmée']);
        }

}
