<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use phpDocumentor\Reflection\PseudoTypes\PositiveInteger;

class Request extends Model
{
    const REQUEST_STATUS_CANCELED=4;
    const REQUEST_STATUS_CONFIRMED=2;
    const REQUEST_STATUS_REJECTED=3;
    const REQUEST_STATUS_PENDING=1;



    use HasFactory;
    function status(){
        return $this->belongsTo(RequestStatus::class,'request_status_id','id');
    }
     function type(){
        return $this->belongsTo(RequestType::class,'type_id','id');
    }

    /**
     * return la position demandée
     * @return Position
     */
    function position(){
            return $this->belongsTo(Position::class);
        }

    /**
     * retourne l'utlisateur qui a créé cette demande
     * @return User
     */
    function creator(){
        return $this->belongsTo(User::class,'creator_id','id');
    }
    function cancel(){
        $this->request_status_id=self::REQUEST_STATUS_CANCELED;
        return $this->save();
    }
    function confirm(){
        $this->request_status_id=self::REQUEST_STATUS_CONFIRMED;
        return $this->save();
    }
    function reject(){
        $this->request_status_id=self::REQUEST_STATUS_REJECTED;
        return $this->save();
    }
    function isForManager(User $manager){
        $creatorBelongsToTeam=$manager->team->members->pluck('id')->contains($this->creator_id);
        $requestedPositionBelongsToManagersTeam=$manager->team->positions->pluck('id')->contains($this->position->id);
        return $creatorBelongsToTeam OR $requestedPositionBelongsToManagersTeam;
    }
}
