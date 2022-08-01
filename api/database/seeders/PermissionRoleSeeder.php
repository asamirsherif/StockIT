<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionRoleSeeder extends Seeder
{	
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {	
		$length = 83; //Number of Permissions in Permissions Seeder
        $seeder_data = array();
		for($i = 1; $i < $length+1 ; $i++){
				array_push($seeder_data,['id' => $i, 'permission_id'=> $i , 'role_id' => '1']);
        }

        // Insert some stuff
    	DB::table('permission_role')->insert(
			$seeder_data
        );
    } 
}
