<?php

namespace App\Models;

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
}
