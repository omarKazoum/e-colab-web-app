<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \App\Models\BuisnessUnit;

class Team extends Model
{
    public $timestamps=false;
    use HasFactory;
    function positions(){
        return $this->hasMany(Position::class);
    }
    function members(){
        return $this->hasMany(User::class,'team_id');
    }
    function buisnessUnit(){
        return $this->belongsTo(buisnessUnit::class,'buisness_unit_id');
    }
}
