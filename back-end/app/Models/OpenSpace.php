<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OpenSpace extends Model
{
    use HasFactory;
    function Building(){
        return $this->belongsTo(Building::class);
    }
    function positions(){
        return $this->hasMany(Position::class);
    }
}
