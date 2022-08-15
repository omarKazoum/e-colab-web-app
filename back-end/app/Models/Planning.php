<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Planning extends Model
{
    use HasFactory;
    function workMode(){
        return $this->belongsTo(WorkMode::class);
    }
    function presenceType(){
        return $this->belongsTo(PresenceType::class);
    }
    function user(){
        return $this->belongsTo(User::class);
    }
    function position(){
        return $this->belongsTo(Position::class);
    }

}
