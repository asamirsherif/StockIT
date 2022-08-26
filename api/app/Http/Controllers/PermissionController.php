<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use App\utils\helpers;
use Carbon\Carbon;
use DB;

use App\Repositories\Permission\PermissionRepositoryInterface;
use App\Repositories\Permission\PermissionRepository;
use App\Traits\ResponseTrait;
use App\Http\Resources\Permission\PermissionResource;
use App\Http\Resources\Permission\RoleResource;

class PermissionController extends Controller
{

    use ResponseTrait;

    private PermissionRepositoryInterface $permRepo;

    public function __construct(PermissionRepositoryInterface $permRepo)
    {
        $this->permRepo = $permRepo;
    }


    //----------- GET ALL Roles --------------\\

    public function index(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'view', Role::class);

        if ($request->filled('search')) {
            $roles = $this->permRepo->multiSearch($request)
                ->paginate($request->perPage);
            $roles->appends(['search' => $request->search]);
        } else
            $roles = Role::filter($request)->paginate($request->perPage);


            $roles->appends([
                "name" => $request->name,
                "label" => $request->label,
                "description" => $request->description,
                "status" => $request->status,
            ]);

            return RoleResource::collection($roles);
    }

    //----------- Store new Role --------------\\

    public function store(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'add', Role::class);

        try {
            request()->validate([
                'role.name' => 'required',
            ]);

            \DB::transaction(function () use ($request) {

                //-- Create New Role
                $Role = new Role;
                $Role->name = $request['role']['name'];
                $Role->label = $request['role']['name'];
                $Role->status = 1;
                $Role->description = $request['role']['description'];
                $Role->save();

                $role = Role::findOrFail($Role->id);
                $role->permissions()->detach();
                $permissions = $request->permissions;

                foreach ($permissions as $permission_slug) {
                    //get the permission object by name
                    $perm = Permission::firstOrCreate(['name' => $permission_slug]);
                    $data[] = $perm->id;
                }

                $role->permissions()->attach($data);

            }, 10);

            return response()->json(['success' => true]);

        } catch (ValidationException $e) {

            return response()->json([
                'status' => 422,
                'msg' => 'error',
                'errors' => $e->errors(),
            ], 422);
        }

    }

    //------------ function show -----------\\

    public function show($id){
        //

        }

    //----------- Update Role --------------\\

    public function update(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'edit', Role::class);

        try {
            request()->validate([
                'role.name' => 'required',
            ]);

            \DB::transaction(function () use ($request, $id) {

                Role::whereId($id)->update($request['role']);

                $role = Role::findOrFail($id);
                $role->permissions()->detach();
                $permissions = $request->permissions;

                foreach ($permissions as $permission_slug) {

                    //get the permission object by name
                    // $perm = Permission::where('name', $permission_slug)->first();
                    $perm = Permission::firstOrCreate(['name' => $permission_slug]);
                    // if ($perm) {
                        $data[] = $perm->id;
                    // }
                }

                $role->permissions()->attach($data);

            }, 10);

            return response()->json(['success' => true]);

        } catch (ValidationException $e) {
            return response()->json([
                'status' => 422,
                'msg' => 'error',
                'errors' => $e->errors(),
            ], 422);
        }

    }

    //----------- Delete Role --------------\\

    public function destroy(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'delete', Role::class);

        Role::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\\

    public function delete_by_selection(Request $request)
    {

        $this->authorizeForUser($request->user('api'), 'delete', Role::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $role_id) {
            Role::whereId($role_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);
    }

    //----------- Check Create Page --------------\\
    public function Check_Create_Page(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'add', Role::class);
    }

    //----------- GET ALL Roles without paginate --------------\\

    public function getRoleswithoutpaginate()
    {
        $roles = Role::where('deleted_at', null)->get(['id', 'name']);
        return response()->json($roles);
    }

    //------------- Show Form Edit Permissions -----------\\

    public function edit(Request $request, $id)
    {

        $this->authorizeForUser($request->user('api'), 'edit', Role::class);

        $Role = Role::with('permissions')->where('deleted_at', '=', null)->findOrFail($id);
        if ($Role) {
            $item['name'] = $Role->name;
            $item['description'] = $Role->description;
            $data = [];
            if ($Role) {
                foreach ($Role->permissions as $permission) {
                    $data[] = $permission->name;
                }
            }
        }
        return response()->json([
            'permissions' => $data,
            'role' => $item,
        ]);
    }


}
