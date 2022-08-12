<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use phpDocumentor\Reflection\PseudoTypes\PositiveInteger;

class Request extends Model
{
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
}
