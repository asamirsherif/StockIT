<?php

namespace App\Providers;


use App\Repositories\ExpenseCategory\ExpenseCategoryRepository;
use App\Repositories\ExpenseCategory\ExpenseCategoryRepositoryInterface;
use App\Repositories\Expense\ExpenseRepository;
use App\Repositories\Expense\ExpenseRepositoryInterface;
use App\Repositories\Adjustment\AdjustmentRepository;
use App\Repositories\Adjustment\AdjustmentRepositoryInterface;
use App\Repositories\Brand\BrandRepository;
use App\Repositories\Brand\BrandRepositoryInterface;
use App\Repositories\Warehouse\WarehouseRepository;
use App\Repositories\Warehouse\WarehouseRepositoryInterface;
use App\Repositories\Currency\CurrencyRepository;
use App\Repositories\Currency\CurrencyRepositoryInterface;
use App\Repositories\Category\CategoryRepository;
use App\Repositories\Category\CategoryRepositoryInterface;
use App\Repositories\Client\ClientRepository;
use App\Repositories\Client\ClientRepositoryInterface;
use App\Repositories\Product\ProductRepository;
use App\Repositories\Product\ProductRepositoryInterface;
use App\Repositories\Provider\ProviderRepository;
use App\Repositories\Provider\ProviderRepositoryInterface;
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
        //for brand
        $this->app->bind(BrandRepositoryInterface::class, BrandRepository::class);

        //for warehouse
        $this->app->bind(WarehouseRepositoryInterface::class, WarehouseRepository::class);


        //for ExpenseCategory
        $this->app->bind(ExpenseCategoryRepositoryInterface::class, ExpenseCategoryRepository::class);


        //for Expense
        $this->app->bind(ExpenseRepositoryInterface::class, ExpenseRepository::class);


        // for currency
        $this->app->bind(CurrencyRepositoryInterface::class, CurrencyRepository::class);



        // category
        $this->app->bind(CategoryRepositoryInterface::class, CategoryRepository::class);


        // client
        $this->app->bind(ClientRepositoryInterface::class, ClientRepository::class);


        // unit
        $this->app->bind(UnitRepositoryInterface::class, UnitRepository::class);


        // adjustment
        $this->app->bind(AdjustmentRepositoryInterface::class, AdjustmentRepository::class);


        //provider
        $this->app->bind(ProviderRepositoryInterface::class, ProviderRepository::class);


        //product
        $this->app->bind(ProductRepositoryInterface::class, ProductRepository::class);
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
