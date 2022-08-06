<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            ClientSeeder::class,
            CurrencySeeder::class,
            PermissionSeeder::class,
            RoleSeeder::class,
            UserSeeder::class,
            UserRoleSeeder::class,
            PermissionRoleSeeder::class,
            WarehouseSeeder::class,
        ]);

        // Development Only Seeders :
        if (env('APP_ENV') =='local'){
            $this->call([
            CategorySeeder::class,
            ProductSeeder::class,
            SaleSeeder::class,
            SaleDetailSeeder::class

        ]);
        }

    }
}
