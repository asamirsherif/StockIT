<?php

namespace App\Repositories\Permission;

use Illuminate\Http\Request;
use App\Models\Role;
use App\Traits\ImageTrait;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class PermissionRepository implements PermissionRepositoryInterface
{



    public function read(int $id): Model
    {
        return Role::find($id);
    }

    public function create(Request $request): Model
    {
        //
        return $role;
    }

    public function update(Request $request, int $id): Model
    {
        $role =  $this->read($id);

        DB::transaction(function () use ($request, $user) {


            $role->save();
    }, 3);

        return $role;
    }

    public function delete(int $id): bool
    {
        return  $this->read($id)->delete();
    }

    public function multiSearch(Request $request): Builder
    {
        $role = Role::where(function ($q) use ($request) {
            return $q->where('name', 'LIKE', "%" . $request->search . "%");
        });

        return $role;
    }
}
