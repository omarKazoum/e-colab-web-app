<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
Use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// for all users
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::group(['middleware' => ['auth:sanctum',]], function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});

//for team members only
Route::group(['middleware'=>['auth:sanctum','hasRole:membre']],function(){
    Route::get('/membre/requests/',[\App\Http\Controllers\RequestsController::class, 'membreGetAll']);
    Route::post('/membre/requests/create',[\App\Http\Controllers\RequestsController::class,'membreCreateRequest']);
    Route::get('/membre/requests/cancel/{requestId}',[\App\Http\Controllers\RequestsController::class,'membreCancelRequest']);
});
// for team managers only
Route::group(['middleware'=>['auth:sanctum','hasRole:manager']],function(){
    Route::get('/manager/requests/',[\App\Http\Controllers\RequestsController::class, 'managerGetAll']);
    Route::get('/manager/requests/reject/{requestId}',[\App\Http\Controllers\RequestsController::class,'managerRejectRequest']);
    Route::get('/manager/requests/confirm/{requestId}',[\App\Http\Controllers\RequestsController::class,'managerConfirmRequest']);

});

//for rh or head of bu only
/*Route::group(['middleware'=>['auth:sanctum','hasRole:rh,chef_bu']],function(){


});*/
