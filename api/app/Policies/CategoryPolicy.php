<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Category;
use App\Models\Permission;
use Illuminate\Auth\Access\HandlesAuthorization;

class CategoryPolicy
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
        $permission = Permission::where('name', 'category')->first();
        return $user->hasRole($permission->roles);
    }

}
