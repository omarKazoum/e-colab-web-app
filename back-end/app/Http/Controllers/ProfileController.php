<?php

namespace App\Http\Controllers;

use App\Models\Request;
use App\Models\User;
use App\Models\Role;
use \App\Models\Planning;
use Carbon\Carbon;


class ProfileController extends Controller
{
    function profileInfo()
    {
            $data=User::where( 'id',auth()->user()->id)->with(['role','team','jobType'])->get();
           if(auth()->user()->role_id==2){ $data['team_members']=auth()->user()->team->members;}
            $p=Planning::where('user_id',auth()->user()->id)->where('date',now()->format('Y-m-d'))->first();
            //demande en cours
            $rec=Request::where('creator_id',auth()->user()->id)->where('request_status_id','1')->count();
            //demande acceptees
            $ra=Request::where('creator_id',auth()->user()->id)->where('request_status_id','2')->count();
            //demande refusees
            $rr=Request::where('creator_id',auth()->user()->id)->where('request_status_id','3')->count();
            //partie de donnees de presence
            $a= Carbon::now()->startOfMonth()->format('Y-m-d');
            $b=  Carbon::now()->endOfMonth()->format('Y-m-d');
            //presentielle
            $sur_site=Planning::whereBetween('date', [$a, $b])->where('work_mode_id', 1)->count();
            //teletravaille
            $tele=Planning::whereBetween('date', [$a, $b])->where('work_mode_id', 2)->count();
         // planning exists 
            if($p){
              $data['is_present']=$p->presenceType();
            }else{
                $data['is_present']=['label'=>'non signalé','id'=>1];
            }
            $data['demandes']=['demande_en_cour'=>$rec,'demande_accepté'=>$ra,'demande_refusé'=>$rr,];
            $data['taux_de_travaille']=['teletravaille_du_mois'=>$tele,'travaille_sur_site_du_mois'=>$sur_site];
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