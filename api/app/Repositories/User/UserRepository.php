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
        $user =  $this->read($id);

        DB::transaction(function () use ($request, $user) {

            $user->firstname = $request->firstname ? $request->firstname : $user->firstname;
            $user->lastname = $request->lastname ? $request->lastname : $user->lastname;
            $user->username = $request->username ? $request->username : $user->username;
            $user->email = $request->email ? $request->email : $user->email;
            $user->password = $request->password ? $request->password : $user->password;
            $user->status = $request->status ? $request->status : $user->status;
            $user->avatar = $request->avatar ? $request->avatar : $user->avatar;

            $user->save();
    }, 3);

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
