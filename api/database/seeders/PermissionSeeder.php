<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       // Insert some stuff
	DB::table('permissions')->insert(
		array ([
			'id'    => 1,
			'name'  => 'users_view',
		],
		[
			'id'    => 2,
			'name'  => 'users_edit',
		],
		[
			'id'    => 3,
			'name'  => 'record_view',
		],
		[
			'id'    => 4,
			'name'  => 'users_delete',
		],
		[
			'id'    => 5,
			'name'  => 'users_add',
		],
		[
			'id'    => 6,
			'name'  => 'permissions_edit',
		],
		[
			'id'    => 7,
			'name'  => 'permissions_view',
		],
		[
			'id'    => 8,
			'name'  => 'permissions_delete',
		],
		[
			'id'    => 9,
			'name'  => 'permissions_add',
		])
	);
    }
}
