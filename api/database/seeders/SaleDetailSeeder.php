<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class SaleDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sale_details')->insert(
            array(

                'id' => 1,
                'date' => Carbon::now(),
                'sale_id' => 1,
                'product_id' => 1,
                'price' => 100,
                'total' => 100,
                'quantity' => 1

            )
        );
    }
}
