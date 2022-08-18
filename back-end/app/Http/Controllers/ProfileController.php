<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Role;


class ProfileController extends Controller
{
    function profileInfo()
    {
         $data=[
           User::where( 'id',auth()->user()->id)->with(['role','team','jobType'])->get()
        ];
            return response()->json($data);
    }


}
