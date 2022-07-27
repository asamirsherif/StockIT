<?php

namespace App\Providers;

use App\Http\Controllers\BrandController;
use App\Http\Controllers\CategoryController;
use App\Repositories\Brand\BrandRepository;
use App\Repositories\Brand\BrandRepositoryInterface;
use App\Repositories\Category\CategoryRepository;
use App\Repositories\Category\CategoryRepositoryInterface;
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
