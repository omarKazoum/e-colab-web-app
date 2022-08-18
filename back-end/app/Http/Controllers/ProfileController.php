<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Role;
use \App\Models\Planning;


class ProfileController extends Controller
{
    function profileInfo()
    {
            $data=User::where( 'id',auth()->user()->id)->with(['role','team','jobType'])->get();
            $p=Planning::where('user_id',auth()->user()->id)->where('date',now()->format('Y-m-d'))->first();
         // planning exists 
            if($p){
              $data['is_present']=$p->presenceType();
            }else{
                $data['is_present']=['label'=>'non signalé','id'=>1];
            }
         //planning does not exis
        
            return response()->json($data);
    }
    function signalerPresence(){
        $p=Planning::where('user_id',auth()->user()->id)->where('date',now()->format('Y-m-d'))->first();
         // planning exists 
            if($p){
              $p->presence_type_id=2;
            }else{
                
                $p = new Planning();
                $p->date = now()->format('Y-m-d');
                $p->work_mode_id=2;
                $p->position_id=1;
                $p->user_id=auth()->user()->id;
                $p->presence_type_id=2;
            }
            $p->save();
            return response()->json(['message'=>'votre présence est bien enregistrée']);
    }


}
