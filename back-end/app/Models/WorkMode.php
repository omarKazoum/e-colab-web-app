<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkMode extends Model
{
    const PRESENCE_TYPE_IN_OFFICE=1;
    public $timestamps=false;
    use HasFactory;
    function plannings(){
        return $this->belongsToMany(Planning::class);
    }
}
