<?php

namespace App\Repositories\Warehouse;

use Illuminate\Http\Request;
use App\Models\Warehouse;
use App\Traits\ImageTrait;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class WarehouseRepository implements WarehouseRepositoryInterface
{



    public function read(int $id): Model
    {
        return Warehouse::find($id);
    }

    public function create(Request $request): Model
    {
        $warehouse = new Warehouse();
        DB::transaction(function () use ($request, $warehouse) {
            $warehouse->name = $request->name;
            $warehouse->mobile = $request->mobile;
            $warehouse->zip = $request->zip;
            $warehouse->email = $request->email;
            $warehouse->country = $request->country;
            $warehouse->city = $request->city;
            $warehouse->save();
        }, 3);


        return $warehouse;
    }

    public function update(Request $request, int $id): Model
    {
        $warehouse = $this->read($id);
        DB::transaction(function () use ($request, $warehouse) {
            $warehouse->name = $request->name ? $request->name : $warehouse->name;
            $warehouse->mobile = $request->mobile ? $request->mobile : $warehouse->mobile;
            $warehouse->zip = $request->zip ? $request->zip : $warehouse->zip;
            $warehouse->email = $request->email ? $request->email : $warehouse->email;
            $warehouse->country = $request->country ? $request->country : $warehouse->country;
            $warehouse->city = $request->city ? $request->city : $warehouse->city;

            $warehouse->save();
        }, 3);

        return $warehouse;
    }

    public function delete(int $id): bool
    {
        return  $this->read($id)->delete();
    }

    public function multiSearch(Request $request): Builder
    {
        $warehouses = Warehouse::where(function ($q) use ($request) {
            return $q->where('name', 'LIKE', "%" . $request->search . "%")
                ->orWhere('mobile', 'LIKE', "%" . $request->search . "%")
                ->orWhere('country', 'LIKE', "%" . $request->search . "%")
                ->orWhere('city', 'LIKE', "%" . $request->search . "%")
                ->orWhere('zip', 'LIKE', "%" . $request->search . "%")
                ->orWhere('email', 'LIKE', "%" . $request->search . "%");
        });

        return $warehouses;
    }
}
