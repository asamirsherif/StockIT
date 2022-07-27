<?php

namespace App\Providers;

use App\Http\Controllers\BrandController;
use App\Http\Controllers\WarehouseController;
use App\Repositories\Brand\BrandRepository;
use App\Repositories\Brand\BrandRepositoryInterface;
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
        //add ur repo
        $this->app->when(BrandController::class)
            ->needs(BrandRepositoryInterface::class)
            ->give(BrandRepository::class);

        $this->app->when(WarehouseController::class)
            ->needs(WarehouseRepositoryInterface::class)
            ->give(WarehouseRepository::class);
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
