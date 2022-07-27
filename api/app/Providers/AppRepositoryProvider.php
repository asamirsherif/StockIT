<?php

namespace App\Providers;

use App\Http\Controllers\BrandController;
use App\Repositories\Brand\BrandRepository;
use App\Repositories\Brand\BrandRepositoryInterface;
use App\Http\Controllers\CurrencyController;
use App\Repositories\Currency\CurrencyRepository;
use App\Repositories\Currency\CurrencyRepositoryInterface;
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

            $this->app->when(CurrencyController::class)
            ->needs(CurrencyRepositoryInterface::class)
            ->give(CurrencyRepository::class);

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
