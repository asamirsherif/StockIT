<?php

namespace App\Providers;

use App\Http\Controllers\AdjustmentController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\UnitController;
use App\Repositories\Adjustment\AdjustmentRepository;
use App\Repositories\Adjustment\AdjustmentRepositoryInterface;
use App\Repositories\Brand\BrandRepository;
use App\Repositories\Brand\BrandRepositoryInterface;
use App\Repositories\Category\CategoryRepository;
use App\Repositories\Category\CategoryRepositoryInterface;
use App\Repositories\Client\ClientRepository;
use App\Repositories\Client\ClientRepositoryInterface;
use App\Repositories\Unit\UnitRepository;
use App\Repositories\Unit\UnitRepositoryInterface;
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
