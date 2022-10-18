<?php

use App\Http\Controllers\BrandController;
use App\Http\Controllers\ExpenseCategoryController;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\WarehouseController;
use App\Http\Controllers\CurrencyController;
use App\Http\Controllers\invoiceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductWarehouseSearchController;
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;
use App\Http\Controllers\ProviderController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\SalesReturnController;
use App\Http\Controllers\ReportController;


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




Route::middleware(['auth:api', 'Is_Active', 'cors'])->group(function () {

    // -------------- USERS ---------------- \\
    Route::apiResource('users', UserController::class);
    Route::get('GetUserAuth', [UserController::class, 'getUserAuth']);
    Route::get("/GetPermissions", [UserController::class, 'GetPermissions']);
    Route::get('users/Get_Info/Profile', [UserController::class, 'GetInfoProfile']);
    Route::put('updateProfile/{id}', [UserController::class, 'updateProfile']);
    Route::post('logout', [UserController::class, 'logoutApi']);

    // ------------- Permission --------------- \\

    Route::apiResource('roles', PermissionController::class);
    Route::post('roles/check/Create_page', [PermissionController::class, 'Check_Create_Page']);
    Route::get('getRoleswithoutpaginate', [PermissionController::class, 'getRoleswithoutpaginate']);
    Route::post('roles/delete/by_selection', [PermissionController::class, 'delete_by_selection']);

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

    //Sanctum csrf test
    Route::get('sanctum/csrf-cookie', [CsrfCookieController::class, 'show']);

    //providers
    Route::apiResource('providers', ProviderController::class);

    //products
    Route::apiResource('products', ProductController::class);
    // purchase
    Route::apiResource('purchases', PurchaseController::class);
    // sale
    Route::apiResource('sales',SaleController::class);

    //SalesReturn
    Route::apiResource('salesReturn', SalesReturnController::class);

    //product warehouse search
    Route::get('purchaseProductSearch', [ProductWarehouseSearchController::class, 'purchaseSearch']);

    // settings
    Route::apiResource('settings', SettingController::class);

    // sale prodcut warehouse search
    Route::get('saleProdcutSearch/{warehouse}', [ProductWarehouseSearchController::class, 'saleSearch']);

    // adjustment prodcut warehouse search
    Route::get('adjProdcutSearch/{warehouse}', [ProductWarehouseSearchController::class, 'adjSearch']);



    // -------------------- report controller -------------------------- //

    //Profit and loss
    Route::get('reports/pofit-loss', [ReportController::class, 'ProfitAndLoss']);

    //warehouse
    Route::get('reports/warehouse-stock', [ReportController::class, 'WarhouseCountStock']);
    Route::get('reports/expenses-warehouse', [ReportController::class, 'ExpensesWarehouse']);
    Route::get('reports/sales-warehouse', [ReportController::class, 'SalesWarehouse']);

    //sales
    Route::get('reports/sales', [ReportController::class, 'ReportSales']);

    //product
    Route::get('reports/quantity-alert', [ReportController::class, 'countQuantityAlert']);
    Route::get('reports/product-alert', [ReportController::class, 'ProductsAlert']);

    //client
    Route::get('reports/client', [ReportController::class, 'ClientReport']);

    //supplier (provider)
    Route::get('reports/supplier', [ReportController::class, 'ProvidersReport']);

    //dashboard charts
    Route::get('charts/dashboard', [ReportController::class, 'report_with_echart']);

});

 // invoices
 Route::get('saleInvoice/{sale}',[invoiceController::class,'saleInvoice']);
 Route::get('purchaseInvoice/{purchase}',[invoiceController::class,'purchaseInvoice']);
 Route::get('saleInvoicePDF/{sale}',[invoiceController::class,'saleInvoicePDF']);
 Route::get('purchaseInvoicePDF/{purchase}',[invoiceController::class,'purchaseInvoicePDF']);