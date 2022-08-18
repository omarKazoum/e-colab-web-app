<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    public $timestamps=false;
    use HasFactory;
    function openSpace(){
        return $this->belongsTo(OpenSpace::class);
    }
    function team(){
        return $this->belongsTo(Team::class);
    }
    function isAvailable(){
        return $this->is_available==1;
    }
    function isEmptyInDate($date){
        //TOTO::add the case when there is a request for this position in that date
        $planningForThisPositionInThisDate=Planning::where('date',Carbon::createFromFormat('Y-m-d',$date))->where('position_id',$this->id)->first();
        return !($planningForThisPositionInThisDate AND $planningForThisPositionInThisDate->work_mode_id=PresenceType::PRESENCE_TYPE_IN_OFFICE);
    }
}
