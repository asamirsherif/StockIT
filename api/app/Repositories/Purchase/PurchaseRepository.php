<?php

namespace App\Repositories\Purchase;

use App\Models\Purchase;
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
        }, 3);

        return $purchase;
    }

    public function update(Request $request, int $id): Model
    {
        $purchase = $this->read($id);
        DB::transaction(function () use ($request, $purchase) {

            $purchase->user_id = $request->user_id ? $request->user_id : $purchase->user_id;
            $purchase->provider_id = $request->provider_id ? $request->provider_id : $purchase->provider_id;
            $purchase->warehouse_id = $request->warehouse_id ? $request->warehouse_id : $purchase->warehouse_id;
            $purchase->date = $request->date ? $request->date : $purchase->date;
            $purchase->tax_rate = $request->tax_rate ? $request->tax_rate : $purchase->tax_rate;
            $purchase->TaxNet = $request->TaxNet ? $request->TaxNet : $purchase->TaxNet;
            $purchase->discount = $request->discount ? $request->discount : $purchase->discount;
            $purchase->shipping = $request->shipping ? $request->shipping : $purchase->shipping;
            $purchase->GrandTotal = $request->GrandTotal ? $request->GrandTotal : $purchase->GrandTotal;
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
            $purchase->delete();
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
}