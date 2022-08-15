<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\RequestsController;
use Illuminate\Support\Facades\Route;
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
    Route::get('/membre/requests/',[RequestsController::class, 'memberGetAll']);
    Route::post('/membre/requests/create',[RequestsController::class,'membreCreateRequest']);
    Route::get('/membre/requests/cancel/{requestId}',[RequestsController::class,'membreCancelRequest']);

});
// for team managers only
Route::group(['middleware'=>['auth:sanctum','hasRole:manager']],function(){
    Route::get('/manager/requests/',[RequestsController::class, 'managerGetAll']);
    Route::get('/manager/requests/reject/{requestId}',[RequestsController::class,'managerRejectRequest']);
    Route::get('/manager/requests/confirm/{requestId}',[RequestsController::class,'managerConfirmRequest']);

});

//for rh or head of bu only
Route::group(['middleware'=>['auth:sanctum','hasRole:rh,chef_bu']],function(){


});
