<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequestType extends Model
{
    public $timestamps=false;
    use HasFactory;

    function requests()
    {
        return $this->hasMany(Request::class);
    }
}
