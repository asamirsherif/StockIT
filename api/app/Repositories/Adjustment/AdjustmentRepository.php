<?php

namespace App\Repositories\Adjustment;

use App\Models\Adjustment;
use App\Models\ProductWarehouse;
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
            $adjustment->items        = $request->items ? $request->items : 0;
            $adjustment->notes        = $request->notes;

            $adjustment->save();

            $this->createAdjustmentDetails($request, $adjustment->id);
            $this->changeProductWarehouse($request);
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
                ->orWhere('Ref', 'LIKE', "%" . $request->search . "%")
                ->orWhere('warehouse_id', 'LIKE', "%" . $request->search . "%");
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

    // create Adjustment Details function
    public function createAdjustmentDetails(Request $request, $id): array
    {
        $adjustment = $this->read($id);
        $adjustmentDeatils = [];
        foreach ($request->details as $adjDetail) {
            $adjustmentDetailModel = $adjustment->adjustmentDeatils();
            DB::transaction(function () use ($adjustmentDetailModel, $adjDetail, $id) {
                $adjustmentDetailModel->create([
                    'adjustment_id' => $id,
                    'quantity' => $adjDetail['quantity'],
                    'product_id' => $adjDetail['product_id'],
                    'product_variant_id' => isset($adjDetail['product_variant_id']) ? $adjDetail['product_variant_id'] : null,
                    'type' => $adjDetail['type'],
                ]);
            }, 3);
            $adjustmentDeatils[] = $adjustmentDetailModel;
        }
        return $adjustmentDeatils;
    }

    //  increase  product in warehouse
    public function changeProductWarehouse(Request $request)
    {
        foreach ($request->details as $adjDetail) {
            DB::transaction(function () use ($adjDetail, $request) {
                //if product already exist in warehouse
                $warehouseProducts = ProductWarehouse::where('product_id', $adjDetail['product_id'])
                    ->where('warehouse_id', $request['warehouse_id'])
                    ->where('product_variant_id', isset($purchDetail['product_variant_id']) ? $purchDetail['product_variant_id'] : null)
                    ->first();

                $newQunatity = $adjDetail['type'] == 'Subtraction' ?
                    $warehouseProducts->qte - $adjDetail['quantity'] : $warehouseProducts->qte + $adjDetail['quantity'];
                $newQunatity = $newQunatity < 0 ? 0: $newQunatity;
                //increase quantity
                $warehouseProducts->update([
                    'qte' => $newQunatity,
                ]);
            }, 3);
        }
    }

    // update updateAdjustmentDetails
    public function updateAdjustmentDetails(Request $request, $id): array
    {
        // delete old details firstly
        // $this->deleteAdjustmentDetails($request, $id);

        // start update of new details
        $adjustment = $this->read($id);
        $adjustmentDeatils = [];
        foreach ($request->adjustmentDeatils as $adjDetail) {
            $adjustmentDetailModel = $adjustment->adjustmentDeatils();
            DB::transaction(function () use ($adjustmentDetailModel, $adjDetail, $id) {
                $adjustmentDetailModel->update([
                    'adjustment_id' => $id,
                    'quantity' => $adjDetail['quantity'],
                    'product_id' => $adjDetail['product_id'],
                    'product_variant_id' => isset($adjDetail['product_variant_id']) ? $adjDetail['product_variant_id'] : null,
                    'type' => $adjDetail['type'],
                ]);
            }, 3);
            $adjustmentDeatils[] = $adjustmentDetailModel;
        }
        return $adjustmentDeatils;
    }

    // delete adj details
    public function deleteAdjustmentDetails(Request $request, int $id): bool
    {
        $adjustmentDeatils = $this->read($id)->adjustmentDeatils()->get('adjustment_id')->toArray();
        foreach ($adjustmentDeatils as $adjDetail) {
            $adjDetail = $adjDetail['adjustment_id'];
            if (!in_array($adjDetail, $request->$adjustmentDeatils)) {
                $this->read($id)->adjustmentDeatils()->where('adjustment_id', $adjDetail)->delete();
            }
        }
        return true;
    }
}
