<?php

namespace App\Repositories\User;

use Illuminate\Http\Request;
use App\Models\User;
use App\Traits\ImageTrait;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class UserRepository implements UserRepositoryInterface
{



    public function read(int $id): Model
    {
        return User::find($id);
    }

    public function create(Request $request): Model
    {
        //
        return $user;
    }

    public function update(Request $request, int $id): Model
    {
        //

        return $user;
    }

    public function delete(int $id): bool
    {
        return  $this->read($id)->delete();
    }

    public function multiSearch(Request $request): Builder
    {
        $user = User::where(function ($q) use ($request) {
            return $q->where('username', 'LIKE', "%" . $request->search . "%");
        });

        return $user;
    }
}
