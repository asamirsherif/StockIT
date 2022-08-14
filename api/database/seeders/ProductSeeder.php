<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert(
            array([
                    'id' => 1,
                    'code' => '123456',
                    'Type_barcode' => '128',
                    'name' => 'Test Product',
                    'cost' => '10',
                    'price' => '200',
                    'category_id' => 1,
                    'is_variant' => 0,

                ])
        );
    }
}
