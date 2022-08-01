<?php

use App\Http\Controllers\BrandController;
use Illuminate\Http\Request;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// category
Route::apiResource('categories', 'App\Http\Controllers\CategoryController');

// clients
Route::apiResource('clients', 'App\Http\Controllers\ClientController');

// units
Route::apiResource('units', 'App\Http\Controllers\UnitController');

// adjustments
Route::apiResource('adjustments', 'App\Http\Controllers\AdjustmentController');


Route::group([], function () {
    Route::apiResource('brands', BrandController::class);
});
