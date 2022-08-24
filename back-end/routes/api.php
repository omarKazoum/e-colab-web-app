<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PlanningMembreController;
use App\Http\Controllers\RequestsController;
use App\Http\Controllers\StatistiquesController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PlanningManagerController;
use App\Http\Controllers\ProfileController;
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
    Route::get('/membre/requests/getCreateOptions/{date}',[RequestsController::class,'membreGetCreateOptions']);

    Route::get('/membre/requests/cancel/{requestId}',[RequestsController::class,'membreCancelRequest']);
    //for manager planning
    Route::get('/membre/planning/from/{fromDate}/to/{toDate}',[PlanningMembreController::class,'membreGetPlanningInterval']);

});
// for team managers only
Route::group(['middleware'=>['auth:sanctum','hasRole:manager']],function(){
    // for managing requests

    Route::get('/manager/requests/',[RequestsController::class, 'managerGetAll']);
    Route::get('/manager/requests/reject/{requestId}',[RequestsController::class,'managerRejectRequest']);
    Route::get('/manager/requests/confirm/{requestId}',[RequestsController::class,'managerConfirmRequest']);
    //for managing planning
    Route::get('/manager/planning/myTeamPlaning/from/{fromDate}/to/{toDate}',[PlanningManagerController::class, 'managerGetPlanningForMyTeamInterval']);
    Route::get('/manager/planning/openSpaces/{openspaceId}/{date}',[PlanningManagerController::class,'managerGetOpenSpaceDataInDate']);
    Route::get('/manager/planning/makeRemote/{membreId}/{date}',[PlanningManagerController::class, 'managerMakeMemberRemoteInDate']);
    Route::get('/manager/planning/makeInOffice/{membreId}/{date}/{positionId}',[PlanningManagerController::class, 'managerMakeMemberInOfficeInDate']);

});

//for rh or head of bu only
Route::group(['middleware'=>['auth:sanctum','hasRole:rh,chef_bu']],function(){

    Route::get('/statistiques/cardsCounts',[StatistiquesController::class,'getCardCounts']);
    Route::get('/statistiques/getPresenceChartData',[StatistiquesController::class, 'getPresenceChartData']);
    Route::get('/statistiques/getOccupationChartData',[StatistiquesController::class, 'getOccupationChartData']);

});
//partie profile
Route::group(['middleware'=>['auth:sanctum','hasRole:rh,chef_bu,manager,membre']],function(){
    Route::post("/profile",[ProfileController::class, 'profileInfo']);
    Route::get('/signalerPresence',[ProfileController::class,'signalerPresence']);
});
