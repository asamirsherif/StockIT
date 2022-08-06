<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Insert some stuff
        DB::table('clients')->insert(
            array(
                'id'     => 1,
                'name'   => 'walk-in-customer',
                'code' => 1,
                'email' => 'walk-in-customer@example.com',
                'country' => 'Egypt',
                'city' => 'Port Said',
                'phone' => '01012345678',
                'address' => '23th St. , Port Said',
            )
                
        );
    }
}
