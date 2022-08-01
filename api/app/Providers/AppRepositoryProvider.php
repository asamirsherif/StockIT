<?php

namespace App\Providers;

use App\Http\Controllers\AdjustmentController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\UnitController;
use App\Repositories\Adjustment\AdjustmentRepository;
use App\Repositories\Adjustment\AdjustmentRepositoryInterface;
use App\Http\Controllers\ExpenseCategoryController;
use App\Http\Controllers\ExpenseController;
use App\Repositories\ExpenseCategory\ExpenseCategoryRepository;
use App\Repositories\ExpenseCategory\ExpenseCategoryRepositoryInterface;
use App\Repositories\Expense\ExpenseRepository;
use App\Repositories\Expense\ExpenseRepositoryInterface;
use App\Http\Controllers\WarehouseController;
use App\Repositories\Brand\BrandRepository;
use App\Repositories\Brand\BrandRepositoryInterface;
use App\Repositories\Warehouse\WarehouseRepository;
use App\Repositories\Warehouse\WarehouseRepositoryInterface;
use App\Http\Controllers\CurrencyController;
use App\Repositories\Currency\CurrencyRepository;
use App\Repositories\Currency\CurrencyRepositoryInterface;

use App\Http\Controllers\ProviderController;
use App\Repositories\Category\CategoryRepository;
use App\Repositories\Category\CategoryRepositoryInterface;
use App\Repositories\Client\ClientRepository;
use App\Repositories\Client\ClientRepositoryInterface;
use App\Repositories\Unit\UnitRepository;
use App\Repositories\Unit\UnitRepositoryInterface;

use App\Repositories\Provider\ProviderRepository;
use App\Repositories\Provider\ProviderRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class AppRepositoryProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //for brand
        $this->app->when(BrandController::class)
            ->needs(BrandRepositoryInterface::class)
            ->give(BrandRepository::class);

        //for warehouse
        $this->app->when(WarehouseController::class)
            ->needs(WarehouseRepositoryInterface::class)
            ->give(WarehouseRepository::class);

        //for ExpenseCategory
        $this->app->when(ExpenseCategoryController::class)
            ->needs(ExpenseCategoryRepositoryInterface::class)
            ->give(ExpenseCategoryRepository::class);

        //for Expense
        $this->app->when(ExpenseController::class)
            ->needs(ExpenseRepositoryInterface::class)
            ->give(ExpenseRepository::class);

        // for currency
        $this->app->when(CurrencyController::class)
            ->needs(CurrencyRepositoryInterface::class)
            ->give(CurrencyRepository::class);

        // category
        $this->app->when(CategoryController::class)
            ->needs(CategoryRepositoryInterface::class)
            ->give(CategoryRepository::class);

        // client
        $this->app->when(ClientController::class)
            ->needs(ClientRepositoryInterface::class)
            ->give(ClientRepository::class);

        // unit
        $this->app->when(UnitController::class)
            ->needs(UnitRepositoryInterface::class)
            ->give(UnitRepository::class);

        // adjustment
        $this->app->when(AdjustmentController::class)
            ->needs(AdjustmentRepositoryInterface::class)
            ->give(AdjustmentRepository::class);

        //provider
        $this->app->when(ProviderController::class)
            ->needs(ProviderRepositoryInterface::class)
            ->give(ProviderRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
