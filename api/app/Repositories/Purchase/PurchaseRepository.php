<?php

namespace App\Repositories\Purchase;

use App\Models\ProductWarehouse;
use App\Models\Purchase;
use App\Models\PurchaseDetail;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class PurchaseRepository implements PurchaseRepositoryInterface
{
    public function read(int $id): Model
    {
        return Purchase::find($id);
    }

    public function create(Request $request): Model
    {
        $purchase = new Purchase();
        DB::transaction(function () use ($request, $purchase) {

            $purchase->user_id          = $request->user_id;
            $purchase->provider_id      = $request->provider_id;
            $purchase->warehouse_id     = $request->warehouse_id;
            $purchase->date             = $request->date;
            $purchase->Ref              = $this->makeCode();
            $purchase->tax_rate         = $request->tax_rate;
            $purchase->TaxNet           = $request->TaxNet;
            $purchase->discount         = $request->discount;
            $purchase->shipping         = $request->shipping;
            $purchase->GrandTotal       = $request->GrandTotal;
            $purchase->paid_amount      = $request->paid_amount;
            $purchase->status           = $request->status;
            $purchase->payment_status   = 'unpaid';
            $purchase->notes            = $request->notes;

            $purchase->save();

            $this->createPurchaseDateails($request, $purchase->id);
            $this->addProductWarehouse($request);
        }, 3);

        return $purchase;
    }

    public function update(Request $request, int $id): Model
    {
        $purchase = $this->read($id);
        DB::transaction(function () use ($request, $purchase) {

            $this->updateProductWarehouse($request, $purchase->id);
            $this->updatePurchaseDateails($request, $purchase->id);

            $purchase->user_id = $request->user_id ? $request->user_id : $purchase->user_id;
            $purchase->provider_id = $request->provider_id ? $request->provider_id : $purchase->provider_id;
            $purchase->warehouse_id = $request->warehouse_id ? $request->warehouse_id : $purchase->warehouse_id;
            $purchase->date = $request->date ? $request->date : $purchase->date;
            $purchase->tax_rate = $request->tax_rate ? $request->tax_rate : $purchase->tax_rate;
            $purchase->TaxNet = $request->TaxNet ? $request->TaxNet : $purchase->TaxNet;
            $purchase->discount = $request->discount ? $request->discount : $purchase->discount;
            $purchase->shipping = $request->shipping ? $request->shipping : $purchase->shipping;
            $purchase->GrandTotal = $request->GrandTotal >= 0 ? $request->GrandTotal : $purchase->GrandTotal;
            $purchase->paid_amount = $request->paid_amount ? $request->paid_amount : $purchase->paid_amount;
            $purchase->status = $request->status ? $request->status : $purchase->status;
            $purchase->payment_status = $request->payment_status ? $request->payment_status : $purchase->payment_status;
            $purchase->notes = $request->notes ? $request->notes : $purchase->notes;

            $purchase->save();
        }, 3);

        return $purchase;
    }

    public function delete(int $id): bool
    {
        $purchase = $this->read($id);
        if ($purchase) {
            DB::transaction(function () use ($purchase) {
                $this->deletePurchaseProducts($purchase->id);
                $purchase->purchaseDetails()->delete();
                $purchase->delete();
            }, 3);
            return true;
        } else
            return false;
    }

    public function multiSearch(Request $request): Builder
    {
        $purchases = Purchase::filter($request)->where(function ($q) use ($request) {
            return $q->where('date', 'LIKE', "%" . $request->search . "%")
                ->orWhere('Ref', 'LIKE', "%" . $request->search . "%")
                ->orWhere('user_id', 'LIKE', "%" . $request->search . "%")
                ->orWhere('provider_id', 'LIKE', "%" . $request->search . "%")
                ->orWhere('status', 'LIKE', "%" . $request->search . "%")
                ->orWhere('warehouse_id', 'LIKE', "%" . $request->search . "%");
        });

        return $purchases;
    }

    public function makeCode(): string
    {
        $last = Purchase::latest()->first();

        if ($last) {
            $item = $last->Ref;
            $nwMsg = explode("_", $item);
            $inMsg = $nwMsg[1] + 1;
            $code = $nwMsg[0] . '_' . $inMsg;
        } else {
            $code = 'PR_1111';
        }
        return $code;
    }

    public function createPurchaseDateails(Request $request, $id): array
    {
        $purchase = $this->read($id);
        $purchaseDetails = [];
        foreach ($request->purchaseDetails as $purchDetail) {
            $purchaseDetailModel = $purchase->purchaseDetails();
            DB::transaction(function () use ($purchaseDetailModel, $purchDetail, $id) {
                $purchaseDetailModel->create([
                    'purchase_id' => $id,
                    'product_id' => $purchDetail['product_id'],
                    'quantity' => $purchDetail['quantity'],
                    'cost' => $purchDetail['cost'],
                    'purchase_unit_id' => $purchDetail['purchase_unit_id'],
                    'TaxNet' => $purchDetail['TaxNet'],
                    'tax_method' => $purchDetail['tax_method'],
                    'discount' => 0,
                    // 'discount_method' => "",
                    'product_variant_id' => isset($purchDetail['product_variant_id']) ? $purchDetail['product_variant_id'] : null,
                    'total' => $purchDetail['total'],
                ]);
            }, 3);
            $purchaseDetails[] = $purchaseDetailModel;
        }

        return $purchaseDetails;
    }

    public function addProductWarehouse(Request $request)
    {
        foreach ($request->purchaseDetails as $purchDetail) {

            //if product already exist in warehouse
            $warehouseProducts = ProductWarehouse::where('product_id', $purchDetail['product_id'])
                ->where('warehouse_id', $request['warehouse_id'])
                ->where('product_variant_id', isset($purchDetail['product_variant_id']) ? $purchDetail['product_variant_id'] : null)
                ->first();

            //if exist change quantity
            if ($warehouseProducts) {
                $warehouseProducts->update([
                    'qte' => $warehouseProducts->qte + $purchDetail['quantity'],
                ]);
            } else {
                $productWarehouseModel = new ProductWarehouse();
                DB::transaction(function () use ($productWarehouseModel, $purchDetail, $request) {
                    // if not create new 
                    $productWarehouseModel->create([
                        'product_id' => $purchDetail['product_id'],
                        'warehouse_id' => $request['warehouse_id'],
                        'product_variant_id' => isset($purchDetail['product_variant_id']) ? $purchDetail['product_variant_id'] : null,
                        'qte' => $purchDetail['quantity'],
                    ]);
                }, 3);
            }
        }
    }

    public function updatePurchaseDateails(Request $request, $id): array
    {
        // delete old one
        $this->deletePurchaseDateails($request, $id);

        // begin of update
        $purchase = $this->read($id);
        $purchaseDetails = [];
        foreach ($request->purchaseDetails as $purchDetail) {
            $purchaseDetailModel = $purchase->purchaseDetails();
            if ($purchDetail['quantity'] > 0) {
                DB::transaction(function () use ($purchaseDetailModel, $purchDetail, $id) {
                    $purchaseDetailModel->updateOrCreate([
                        'purchase_id' => $id,
                        'product_id' => $purchDetail['product_id'],
                        'quantity' => $purchDetail['quantity'],
                        'cost' => $purchDetail['cost'],
                        'purchase_unit_id' => $purchDetail['purchase_unit_id'],
                        'TaxNet' => $purchDetail['TaxNet'],
                        'tax_method' => $purchDetail['tax_method'],
                        'discount' => 0,
                        //'discount_method' => $purchDetail['discount_method'],
                        'product_variant_id' => isset($purchDetail['product_variant_id']) ? $purchDetail['product_variant_id'] : null,
                        'total' => $purchDetail['total'],
                    ]);
                }, 3);
            }
            $purchaseDetails[] = $purchaseDetailModel;
        }
        return $purchaseDetails;
    }

    public function updateProductWarehouse(Request $request, int $purchase_id)
    {
        foreach ($request->purchaseDetails as $purchDetail) {

            //if product already exist in warehouse
            $warehouseProducts = ProductWarehouse::where('product_id', $purchDetail['product_id'])
                ->where('warehouse_id', $request['warehouse_id'])
                ->where('product_variant_id', isset($purchDetail['product_variant_id']) ? $purchDetail['product_variant_id'] : null)
                ->first();

            $purchaseProduct = PurchaseDetail::where('purchase_id', $purchase_id)
                ->where('product_id', $purchDetail['product_id'])
                ->first();

            //if exist change quantity
            if ($warehouseProducts && $purchaseProduct) {
                $warehouseProducts->update([
                    'qte' => $warehouseProducts->qte - $purchaseProduct->quantity,
                ]);
            }

            $this->addProductWarehouse($request);
        }
    }

    // delete fun
    public function deletePurchaseDateails(Request $request, int $id): bool
    {
        $purchaseDetails = $this->read($id)->purchaseDetails()->get(['purchase_id', 'quantity'])->toArray();
        foreach ($purchaseDetails as $purchDetail) {
            $purchID = $purchDetail['purchase_id'];
            $quantity = $purchDetail['quantity'];
            if (!in_array($purchID, $request->purchaseDetails) || $quantity == 0) {
                $this->read($id)->purchaseDetails()->where('purchase_id', $purchID)->delete();
            }
        }
        return true;
    }

    public function deletePurchaseProducts($id)
    {
        $purchase = $this->read($id);
        $purchaseDetails = $purchase->purchaseDetails;
        $warehouseID = $purchase->warehouse->id;

        foreach ($purchaseDetails as $purchaseDetail) {
            $warehouseProduct = ProductWarehouse::where('product_id', $purchaseDetail['product_id'])
                ->where('warehouse_id', $warehouseID)
                ->where('product_variant_id', isset($purchDetail['product_variant_id']) ? $purchDetail['product_variant_id'] : null);

            $reminder = $warehouseProduct->first()->qte - $purchaseDetail->quantity;
            $reminder = $reminder > 0 ? $reminder : 0;
            $warehouseProduct->update([
                'qte' => $reminder
            ]);
        }
    }
}
