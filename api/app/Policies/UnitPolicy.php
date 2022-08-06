<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Unit;
use App\Models\Permission;
use Illuminate\Auth\Access\HandlesAuthorization;

class UnitPolicy
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


     /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\User  $model
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user)
    {
        $permission = Permission::where('name', 'unit')->first();
        return $user->hasRole($permission->roles);
    }


}
