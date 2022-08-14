<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class SaleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
          // Works only in local enviroment

            DB::table('sales')->insert(
                array([
                    'id'    => 1,
                    'user_id'  => '1',
                    'date' => Carbon::now(),
                    'Ref' => 'Sale_1234',
                    // 'is_pos' => '',
                    'client_id'=> 1,
                    'warehouse_id'=> 1,
                    // 'tax_rate' => '',
                    // 'TaxNet' => '',
                    // 'discount' => '',
                    // 'shipping' => '',
                    'GrandTotal' => 55,
                    'Paid_amount' => 0,
                    'payment_status' => 'unpaid',
                    'status' => 'recieved',
                    'notes' => 'create dummy sale',
                ]));
        
    }
}
