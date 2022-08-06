<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        'App\Models\User'     => 'App\Policies\UserPolicy',
        'App\Models\Brand'     => 'App\Policies\BrandPolicy',
        'App\Models\Category'     => 'App\Policies\CategoryPolicy',
        'App\Models\Currency'     => 'App\Policies\CurrencyPolicy',
        'App\Models\ExpenseCategory'     => 'App\Policies\ExpenseCategoryPolicy',
        'App\Models\Expense'     => 'App\Policies\ExpensePolicy',
        'App\Models\Role'     => 'App\Policies\RolePolicy',
        'App\Models\Sale'     => 'App\Policies\SalePolicy',
        'App\Models\Unit'     => 'App\Policies\UnitPolicy',

    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        Passport::routes();
    }
}
