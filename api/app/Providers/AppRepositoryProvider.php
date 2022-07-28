<?php

namespace App\Providers;

use App\Http\Controllers\BrandController;
use App\Http\Controllers\ExpenseCategoryController;
use App\Http\Controllers\WarehouseController;
use App\Repositories\Brand\BrandRepository;
use App\Repositories\Brand\BrandRepositoryInterface;
use App\Repositories\ExpenseCategory\ExpenseCategoryRepository;
use App\Repositories\ExpenseCategory\ExpenseCategoryRepositoryInterface;
use App\Repositories\Warehouse\WarehouseRepository;
use App\Repositories\Warehouse\WarehouseRepositoryInterface;
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
