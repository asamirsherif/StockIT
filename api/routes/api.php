<?php

use App\Http\Controllers\BrandController;
use App\Http\Controllers\ExpenseCategoryController;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\WarehouseController;
use App\Http\Controllers\CurrencyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PermissionController;
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;
use App\Http\Controllers\ProviderController;
use App\Http\Controllers\SalesReturnController;

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

// header('Access-Control-Allow-Origin:  *');
// header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE');
// header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Origin, Authorization');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::middleware([])->group(function () {

    // -------------- USERS ---------------- \\
    Route::apiResource('users', UserController::class);
    Route::get('GetUserAuth', [UserController::class,'getUserAuth']);
    Route::get("/GetPermissions", [UserController::class,'GetPermissions']);
    Route::get('users/Get_Info/Profile', [UserController::class,'GetInfoProfile']);
    Route::put('updateProfile/{id}', [UserController::class,'updateProfile']);
    Route::post('logout', [UserController::class,'logoutApi']);

    // ------------- Permission --------------- \\

    Route::apiResource('roles', PermissionController::class);
    Route::post('roles/check/Create_page', [PermissionController::class , 'Check_Create_Page']);
    Route::get('getRoleswithoutpaginate', [PermissionController::class, 'getRoleswithoutpaginate']);
    Route::post('roles/delete/by_selection', [PermissionController::class,'delete_by_selection']);

    Route::apiResource('brands', BrandController::class);

    Route::apiResource('warehouses', WarehouseController::class);

    Route::apiResource("expensecategories", ExpenseCategoryController::class);

    Route::apiResource("expenses", ExpenseController::class);

    Route::apiResource('currencies', CurrencyController::class);

    // category
    Route::apiResource('categories', 'App\Http\Controllers\CategoryController');

    // clients
    Route::apiResource('clients', 'App\Http\Controllers\ClientController');

    // units
    Route::apiResource('units', 'App\Http\Controllers\UnitController');

    // adjustments
    Route::apiResource('adjustments', 'App\Http\Controllers\AdjustmentController');

    Route::get('sanctum/csrf-cookie', [CsrfCookieController::class, 'show']);

    Route::apiResource('providers',ProviderController::class);

    //SalesReturn
    Route::apiResource('salesReturn', SalesReturnController::class);

});
