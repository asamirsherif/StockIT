<?php

namespace App\Repositories\Sales_return;

use App\Models\SaleReturnDetails;
use Illuminate\Http\Request;
use App\Models\SalesReturn;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Sales_returnRepository implements Sales_returnRepositoryInterface
{




    public function read(int $id): Model
    {
        return SalesReturn::find($id);
    }

    public function create(Request $request): Model
    {
        $salesReturn = new SalesReturn();
        DB::transaction(function () use ($request, $salesReturn) {
        // $salesReturn->user_id = Auth::user()->id;
            $salesReturn->user_id = $request->user_id;
            $salesReturn->date = $request->date;
            $salesReturn->Ref = $this->makeCode();
            $salesReturn->client_id = $request->client_id;
            $salesReturn->warehouse_id = $request->warehouse_id;
            $salesReturn->tax_rate = $request->tax_rate;
            $salesReturn->TaxNet = $request->TaxNet;
            $salesReturn->discount = $request->discount;
            $salesReturn->shipping = $request->shipping;
            $salesReturn->GrandTotal = $request->GrandTotal;
            $salesReturn->paid_amount = $request->paid_amount;
            $salesReturn->payment_status = 'unpaid';
            $salesReturn->status = $request->status;
            $salesReturn->notes = $request->notes;

            $salesReturn->save();

        }, 3);


        return $salesReturn;
    }

    public function update(Request $request, int $id): Model
    {
        $salesReturn = $this->read($id);
        DB::transaction(function () use ($request, $salesReturn) {

            //check again after samir finish sales

            // $salesReturn->user_id = Auth::user()->id ? Auth::user()->id: $salesReturn->user_id;
            // $salesReturn->user_id = $request->user_id ? $request->user_id: $salesReturn->user_id;
            $salesReturn->user_id = $request->user_id ? $request->user_id : $salesReturn->user_id;
            $salesReturn->date = $request->date ? $request->date: $salesReturn->date;
            // $salesReturn->Ref = $request->Ref ? $request->Ref: $salesReturn->Ref ;
            $salesReturn->client_id = $request->client_id ? $request->client_id: $salesReturn->client_id;
            $salesReturn->warehouse_id = $request->warehouse_id ? $request->warehouse_id: $salesReturn->warehouse_id;
            $salesReturn->tax_rate = $request->tax_rate ? $request->tax_rate: $salesReturn->tax_rate;
            $salesReturn->TaxNet = $request->TaxNet ? $request->TaxNet: $salesReturn->TaxNet;
            $salesReturn->discount = $request->discount ? $request->discount: $salesReturn->discount;
            $salesReturn->shipping = $request->shipping ? $request->shipping: $salesReturn->shipping;
            $salesReturn->GrandTotal = $request->GrandTotal ? $request->GrandTotal: $salesReturn->GrandTotal;
            $salesReturn->paid_amount = $request->paid_amount ? $request->paid_amount: $salesReturn->paid_amount;
            $salesReturn->payment_status = $request->payment_status ? $request->payment_status: $salesReturn->payment_status;
            $salesReturn->status= $request->status? $request->status: $salesReturn->status;
            $salesReturn->notes = $request->notes ? $request->notes: $salesReturn->notes;



            $salesReturn->save();

        }, 3);

        return $salesReturn;
    }

    public function delete(int $id): bool
    {
        $salesReturn = $this->read($id);
        if ($salesReturn) {
            $salesReturn->delete();
            return true;
        } else
            return false;
    }

    public function makeCode(): string
    {
        $last = SalesReturn::latest()->first();

        if ($last) {

            $item = $last->Ref;
            $nwMsg = explode("_", $item);
            $inMsg = $nwMsg[1] + 1;
            $code = $nwMsg[0] . '_' . $inMsg;
        } else {
            $code = 'RT_1111'; // Again
        }
        return $code;
    }

    public function multiSearch(Request $request): Builder
    {
        $salereturns = SalesReturn::where(function ($q) use ($request) {
            return $q->where('date', 'LIKE', "%" . $request->search . "%")
                ->orWhere('Ref', 'LIKE', "%" . $request->search . "%")
                ->orWhere('client_id', 'LIKE', "%" . $request->search . "%");
        });

        return $salereturns;
    }


    public function createSalesReturneDateails(Request $request, $id): array
    {
        $salesReturn = $this->read($id);
        $salesReturnDetails = [];
        foreach ($request->salesReturnDetails as $salesDetail) {
            $salesReturnDetailModel = $salesReturn->salesReturnDetails();
            DB::transaction(function() use ($salesReturnDetailModel, $salesDetail, $id) {
                $salesReturnDetailModel->create([
                    'sale_return_id' => $id,
                    'product_id' => $salesDetail['product_id'],
                    'quantity' => $salesDetail['quantity'],
                    'price' => $salesDetail['price'],
                    'sale_unit_id' => $salesDetail['sale_unit_id'],
                    'TaxNet' => $salesDetail['TaxNet'],
                    'tax_method' => $salesDetail['tax_method'],
                    'discount' => $salesDetail['discount'],
                    'discount_method' => $salesDetail['discount_method'],
                    'product_variant_id' => isset($salesDetail['product_variant_id'])?$salesDetail['product_variant_id'] : null,
                    'total' => $salesDetail['total'],
                ]);
            }, 3);
            $salesReturnDetails[] = $salesReturnDetailModel;
        }

        return $salesReturnDetails;
    }

    public function updateSalesReturnDateails(Request $request, $id): array
    {
        // delete old one
        // $this->deleteSalesReturnDateails($request, $id);

        // begin of update
        $salesReturn = $this->read($id);
        $salesReturnDetails = [];
        foreach ($request->purchaseDetails as $salesDetail) {
            $salesReturnDetailModel = $salesReturn->purchaseDetails();
            DB::transaction(function() use ($salesReturnDetailModel, $salesDetail, $id) {
                $salesReturnDetailModel->updateOrCreate([
                    'sale_return_id' => $id,
                    'product_id' => $salesDetail['product_id'],
                    'quantity' => $salesDetail['quantity'],
                    'price' => $salesDetail['price'],
                    'sale_unit_id' => $salesDetail['sale_unit_id'],
                    'TaxNet' => $salesDetail['TaxNet'],
                    'tax_method' => $salesDetail['tax_method'],
                    'discount' => $salesDetail['discount'],
                    'discount_method' => $salesDetail['discount_method'],
                    'product_variant_id' => isset($salesDetail['product_variant_id'])?$salesDetail['product_variant_id'] : null,
                    'total' => $salesDetail['total'],
                ]);
            }, 3);
            $salesReturnDetails[] = $salesReturnDetailModel;
        }
        return $salesReturnDetails;
    }

    public function deleteSalesReturnDateails(Request $request, int $id): bool
    {
        $salesReturnDetails = $this->read($id)->salesReturnDetails()->get('sale_return_id')->toArray();
        foreach($salesReturnDetails as $salesDetail) {
            $salesDetail = $salesDetail['sale_return_id'];
            if(!in_array($salesDetail, $request->salesReturnDetails)) {
                $this->read($id)->salesReturnDetails()->where('sale_return_id', $salesDetail)->delete();
            }
        }
        return true;
    }

}
