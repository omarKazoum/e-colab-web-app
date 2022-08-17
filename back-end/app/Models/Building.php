<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Building extends Model
{
    public $timestamps=false;
    use HasFactory;
    function city(){
        return $this->hasOne(City::class);
    }
    function openSpaces(){
        return $this->hasMany(OpenSpace::class);
    }

}
