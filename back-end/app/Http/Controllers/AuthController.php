<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    //
    public function register(Request $request) {
        $fields = $request->validate([
            'role_id' => 'string|required',
            'team_id' => 'string|required',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'job_type_id' => 'string',
            'password_hash' => 'required|string|confirmed',
            'job_type_id'=>'string|required'
        ]);

        $user = User::create([
            'first_name' => $fields['first_name'],
            'last_name' => $fields['last_name'],
            'email' => $fields['email'],
            'password_hash' => bcrypt($fields['password_hash']),
            'role_id'=>$fields['role_id'],
            'team_id'=>$fields['team_id'],
            'job_type_id'=>$fields['job_type_id'],
            'remember_token_created_at'=>now()
        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function login(Request $request) {
        $fields = $request->validate([

            'email' => 'required|string',
            'password_hash' => 'required|string'
        ]);

        // Checking the email
        $user = User::where('email', $fields['email'])->first();

        // Check password
        if(!$user || !Hash::check($fields['password_hash'], $user->password_hash)) {
            return response([
                'message' => 'unvalide data'
            ], 401);
        }

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }


    public function logout(Request $request) {
        auth()->user()->tokens()->delete();

        return [
            'message' => 'Logged out'
        ];
    }
}

