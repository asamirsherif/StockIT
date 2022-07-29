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
        // Insert some stuff
    DB::table('permission_role')->insert(
		array(
			[
				'id'            => 1,
				'permission_id' => 1,
				'role_id'       => 1,
			],
			[
				'id'            => 2,
				'permission_id' => 2,
				'role_id'       => 1,
			],
			[
				'id'            => 3,
				'permission_id' => 3,
				'role_id'       => 1,
			],
			[
				'id'            => 4,
				'permission_id' => 4,
				'role_id'       => 1,
			],
			[
				'id'            => 5,
				'permission_id' => 5,
				'role_id'       => 1,
			],
			[
				'id'            => 6,
				'permission_id' => 6,
				'role_id'       => 1,
			],
			[
				'id'            => 7,
				'permission_id' => 7,
				'role_id'       => 1,
			],
			[
				'id'            => 8,
				'permission_id' => 8,
				'role_id'       => 1,
			],
			[
				'id'            => 9,
				'permission_id' => 9,
				'role_id'       => 1,
            ],)
            );

    } 
}
