<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class UserController extends BaseController
{
    public function index(request $request){
        $this->authorize($request->user('api'), User::class);

        return response()->json([
            'users' => $users,
        ]);
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
        ], [
            'email.unique' => 'This Email already taken.',
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
        //
        
    }

    public function edit(Request $request, $id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'update', User::class);
        
        $this->validate($request, [
            'email' => 'required|email|unique:users',
            'email' => Rule::unique('users')->ignore($id),
        ], [
            'email.unique' => 'This Email already taken.',
        ]);

        \DB::transaction(function () use ($id ,$request) {
            $user = User::findOrFail($id);
            $current = $user->password;

            if ($request->NewPassword != 'null') {
                if ($request->NewPassword != $current) {
                    $pass = Hash::make($request->NewPassword);
                } else {
                    $pass = $user->password;
                }

            } else {
                $pass = $user->password;
            }

            $currentAvatar = $user->avatar;

            //SAVE Avatar in Public Folder 
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
                'statut' => $request['statut'],
            ]);


            $user_saved = User::where('deleted_at', '=', null)->findOrFail($id);

        }, 10);
        
        return response()->json(['success' => true]);
    }



}
