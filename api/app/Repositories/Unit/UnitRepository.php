<?php

namespace App\Repositories\Unit;

use Illuminate\Http\Request;
use App\Models\Unit;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class UnitRepository implements UnitRepositoryInterface
{
    public function read(int $id): Model
    {
        return Unit::find($id);
    }

    public function create(Request $request): Model
    {
        $unit = new Unit();
        DB::transaction(function () use ($request, $unit) {

            $unit->name            = $request->name;
            $unit->ShortName       = $request->ShortName;
            $unit->base_unit       = $request->base_unit;
            $unit->operator        = $request->operator ? $request->operator : '*';
            $unit->operator_value  = $request->operator_value ? $request->operator_value : 1 ;

            $unit->save();
        }, 3);

        return $unit;
    }

    public function update(Request $request, int $id): Model
    {
        $unit = $this->read($id);
        DB::transaction(function () use ($request, $unit) {

            $unit->name = $request->name ? $request->name : $unit->name;
            $unit->ShortName = $request->ShortName ? $request->ShortName : $unit->ShortName;
            $unit->base_unit = $request->base_unit ? $request->base_unit : $unit->base_unit;
            $unit->operator = $request->operator ? $request->operator : $unit->operator;
            $unit->operator_value = $request->operator_value ? $request->operator_value : $unit->operator_value;

            $unit->save();
    }, 3);

    return $unit;
    }

    public function delete(int $id): bool
    {
        $unit = $this->read($id);
        if ($unit) {
            $unit->delete();
            return true;
        } else
            return false;
    }

    public function multiSearch(Request $request): Builder
    {
        $units = Unit::where(function ($q) use ($request) {
            return $q->where('name', 'LIKE', "%" . $request->search . "%")
                ->orWhere('ShortName', 'LIKE', "%" . $request->search . "%");
        });

        return $units;
    }
}