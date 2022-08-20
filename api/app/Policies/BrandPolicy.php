<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Brand;
use App\Models\Permission;
use Illuminate\Auth\Access\HandlesAuthorization;

class BrandPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function view(User $user)
    {
        $permission = Permission::where('name', 'brand')->first();
        return $user->hasRole($permission->roles);
    }

}
