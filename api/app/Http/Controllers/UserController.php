<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\role_user;
use App\utils\helpers;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Laravel\Passport\RefreshToken;
use Laravel\Passport\Token;
use Intervention\Image\ImageManagerStatic as Image;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\User\UserRepository;
use App\Traits\ResponseTrait;
use App\Http\Resources\User\UserResource;

class UserController extends BaseController
{
    use ResponseTrait;

    private UserRepositoryInterface $saleRepo;

    public function __construct(UserRepositoryInterface $userRepo)
    {
        $this->userRepo = $userRepo;
    }

    public function index(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'view', User::class);

        if ($request->filled('search')) {
            $users = $this->userRepo->multiSearch($request)
                ->paginate($request->perPage);
            $users->appends(['search' => $request->search]);
        } else
            $users = User::filter($request)->paginate($request->perPage);


            $users->appends([
                "firstname" => $request->firstname,
                "lastname" => $request->lastname,
                "username" => $request->username,
                "email" => $request->email,
                "phone" => $request->phone,
                "status" => $request->status,
                "perPage" => $request->perPage
            ]);

            return UserResource::collection($users);
    }

    public function getUserAuth(Request $request)
    {

        $user['avatar'] = Auth::user()->avatar;
        $user['username'] = Auth::user()->username;

        return response()->json([
            'success' => true,
            'user' => $user,
        ]);
    }

    public function store(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'create', User::class);

        $this->validate($request, [
            'email' => 'required|unique:users',
            'username' => 'required|unique:users'
        ], [
            'email.unique' => 'This Email already taken.',
            'username.unique' => 'This Username already taken.',
        ]);

        \DB::transaction(function () use ($request) {
            if ($request->hasFile('avatar')) {

                $image = $request->file('avatar');
                $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

                $image_resize = Image::make($image->getRealPath());
                $image_resize->resize(128, 128);
                $image_resize->save(public_path('/images/avatar/' . $filename));

            } else {
                $filename = 'no_avatar.png';
            }

            $User = new User;
            $User->firstname = $request['firstname'];
            $User->lastname  = $request['lastname'];
            $User->username  = $request['username'];
            $User->email     = $request['email'];
            $User->phone     = $request['phone'];
            $User->password  = Hash::make($request['password']);
            $User->avatar    = $filename;
            $User->save();


        }, 10);

        return response()->json(['success' => true]);
    }

    public function show($id){
        $user = User::find($id);
        if(!$user)
             return $this->errMsg('no user Found!');
        else
            return $this->succWithData(new UserResource($user),'User found successfully');

    }

    public function edit(Request $request, $id)
    {
        //
    }

    //------------- UPDATE PROFILE ---------\\

    public function updateProfile(Request $request)
    {
        $id = Auth::user()->id;
        $user = User::findOrFail($id);
        $current = $user->password;

        if ($request->NewPassword != 'undefined') {
            if ($request->NewPassword != $current) {
                $pass = Hash::make($request->NewPassword);
            } else {
                $pass = $user->password;
            }

        } else {
            $pass = $user->password;
        }

        $currentAvatar = $user->avatar;
        if ($request->avatar != $currentAvatar) {

            $image = $request->file('avatar');
            $path = public_path() . '/images/avatar';
            $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

            $image_resize = Image::make($image->getRealPath());
            $image_resize->resize(128, 128);
            $image_resize->save(public_path('/images/avatar/' . $filename));

            $userPhoto = $path . '/' . $currentAvatar;

            if (file_exists($userPhoto)) {
                if ($user->avatar != 'no_avatar.png') {
                    @unlink($userPhoto);
                }
            }
        } else {
            $filename = $currentAvatar;
        }

        User::whereId($id)->update([
            'firstname' => $request['firstname'],
            'lastname' => $request['lastname'],
            'username' => $request['username'],
            'email' => $request['email'],
            'phone' => $request['phone'],
            'password' => $pass,
            'avatar' => $filename,

        ]);

        return response()->json(['avatar' => $filename, 'user' => $request['username']]);

    }


    public function update(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'update', User::class);

        $user = $this->userRepo->update($request, $id);
        if ($user)
            return $this->succWithData(new UserResource($user), "user updated successfully");
        else
            return $this->errMsg("unit not updated!");
    }

    //----------- IsActivated (Update Status User) -------\\

    public function IsActivated(request $request, $id)
    {

        $this->authorizeForUser($request->user('api'), 'update', User::class);

        $user = Auth::user();
        if ($request['id'] !== $user->id) {
            User::whereId($id)->update([
                'status' => $request['status'],
            ]);
            return response()->json([
                'success' => true,
            ]);
        } else {
            return response()->json([
                'success' => false,
            ]);
        }
    }

    public function GetPermissions()
    {
        $roles = Auth::user()->roles()->with('permissions')->first();
        $data = [];
        if ($roles) {
            foreach ($roles->permissions as $permission) {
                $item[] = $permission->name;
            }
            $data[] = $item;
        }
        return $data[0];

    }

    //------------- GET USER Auth ---------\\

    public function GetInfoProfile(Request $request)
    {
        $data = Auth::user();
        return response()->json(['success' => true, 'user' => $data]);
    }

    public function logoutApi()
    {
        if (Auth::check()) {
           Auth::user()->oauthAccessToken()->delete();
        }
    }


}
