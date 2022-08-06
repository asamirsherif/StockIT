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
            $adjustment->Ref          = $this->makeCode();
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
        $adjustments = Adjustment::filter($request)->where(function ($q) use ($request) {
            return $q->where('date', 'LIKE', "%" . $request->search . "%")
                ->orWhere('Ref', 'LIKE', "%" . $request->search . "%");
        });

        return $adjustments;
    }

    public function makeCode(): string
    {
        $last = Adjustment::latest()->first();

        if ($last) {
            $item = $last->Ref;
            $nwMsg = explode("_", $item);
            $inMsg = $nwMsg[1] + 1;
            $code = $nwMsg[0] . '_' . $inMsg;
        } else {
            $code = 'AD_1111';
        }
        return $code;
    }
}