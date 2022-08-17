<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkMode extends Model
{
    public $timestamps=false;
    use HasFactory;
    function plannings(){
        return $this->belongsToMany(Planning::class);
    }
}
