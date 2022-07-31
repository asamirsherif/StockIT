<?php

namespace App\Repositories\Adjustment;

use App\Models\Adjustment;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class AdjustmentRepository implements AdjustmentRepositoryInterface
{
    public function read(int $id): Model
    {
        return Adjustment::find($id);
    }

    public function create(Request $request): Model
    {
        $adjustment = new Adjustment();
        DB::transaction(function () use ($request, $adjustment) {

            $adjustment->user_id      = $request->user_id;
            $adjustment->warehouse_id = $request->warehouse_id;
            $adjustment->date         = $request->date;
            $adjustment->Ref          = $request->Ref;
            $adjustment->items        = $request->items;
            $adjustment->notes        = $request->notes;

            $adjustment->save();
        }, 3);

        return $adjustment;
    }

    public function update(Request $request, int $id): Model
    {
        $adjustment = $this->read($id);
        DB::transaction(function () use ($request, $adjustment) {

            $adjustment->user_id = $request->user_id ? $request->user_id : $adjustment->user_id;
            $adjustment->warehouse_id = $request->warehouse_id ? $request->warehouse_id : $adjustment->warehouse_id;
            $adjustment->date = $request->date ? $request->date : $adjustment->date;
            $adjustment->Ref = $request->Ref ? $request->Ref : $adjustment->Ref;
            $adjustment->items = $request->items ? $request->items : $adjustment->items;
            $adjustment->notes = $request->notes ? $request->notes : $adjustment->notes;

            $adjustment->save();
    }, 3);

    return $adjustment;
    }

    public function delete(int $id): bool
    {
        $adjustment = $this->read($id);
        if ($adjustment) {
            $adjustment->delete();
            return true;
        } else
            return false;
    }

    public function multiSearch(Request $request): Builder
    {
        $adjustments = Adjustment::where(function ($q) use ($request) {
            return $q->where('name', 'LIKE', "%" . $request->search . "%")
                ->orWhere('ShortName', 'LIKE', "%" . $request->search . "%");
        });

        return $adjustments;
    }
}