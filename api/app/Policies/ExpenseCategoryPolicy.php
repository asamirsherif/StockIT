<?php

namespace App\Policies;

use App\Models\ExpenseCategory;
use App\Models\Permission;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;


class ExpenseCategoryPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\ExpenseCategory  $expenseCategory
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user)
    {
        $permission = Permission::where('name', 'category_expense_view')->first();
        return $user->hasRole($permission->roles);
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        $permission = Permission::where('name', 'category_expense_add')->first();
        return $user->hasRole($permission->roles);
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\ExpenseCategory  $expenseCategory
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user)
    {
        $permission = Permission::where('name', 'category_expense_edit')->first();
        return $user->hasRole($permission->roles);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\ExpenseCategory  $expenseCategory
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user)
    {
        $permission = Permission::where('name', 'category_expense_delete')->first();
        return $user->hasRole($permission->roles);
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\ExpenseCategory  $expenseCategory
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\ExpenseCategory  $expenseCategory
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user)
    {
        //
    }
}
