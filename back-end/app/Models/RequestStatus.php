<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequestStatus extends Model
{
    protected $table='request_statuts';
    use HasFactory;
    function requests(){
        return $this->hasMany(Request::class);
    }
}