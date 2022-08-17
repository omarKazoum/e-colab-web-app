<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ProfileController extends Controller
{
    function profileInfo()
    {
        $user=auth()->user();
        $user->is_present=true;
         $data=$user;
            return response()->json($data);
    }


}
