<?php

namespace App\Repositories\Sale;

use App\Models\Sale;
use App\Models\Role;
use App\Models\User;
use App\Models\Product;
use App\Models\Unit;
use App\Models\SaleDetail;
use App\Models\ProductVariant;
use App\Models\ProductWarehouse;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SaleRepository implements SaleRepositoryInterface
{

    public function read(int $id): Model
    {
        return Sale::find($id);
    }

    public function create(Request $request): Model
    {   
        $order = new Sale();

        DB::transaction(function () use ($request,$order) {

            $order->is_pos = 0;
            $order->date = $request->date;
            $order->Ref = /* $this->getNumberOrder(); */ 'S_1112';
            $order->client_id = $request->client_id;
            $order->GrandTotal = $request->GrandTotal;
            $order->warehouse_id = $request->warehouse_id;
            $order->tax_rate = $request->tax_rate;
            $order->TaxNet = $request->TaxNet;
            $order->discount = $request->discount;
            $order->shipping = $request->shipping;
            $order->status = $request->status;
            $order->payment_status = 'unpaid';
            $order->notes = $request->notes;
            $order->user_id = Auth::user()->id;

            $order->save();

            $data = $request['details'];
            foreach ($data as $key => $value) {
                $unit = Unit::where('id', $value['sale_unit_id'])
                    ->first();

                $orderDetails[] = [
                    'date' => $request->date,
                    'sale_id' => $order->id,
                    'sale_unit_id' =>  $value['sale_unit_id'],
                    'quantity' => $value['quantity'],
                    'price' => $value['unit_price'],
                    'TaxNet' => $value['tax_percent'],
                    'tax_method' => $value['tax_method'],
                    'discount' => $value['discount'],
                    'discount_method' => $value['discount_method'],
                    'product_id' => $value['product_id'],
                    'product_variant_id' => $value['product_variant_id'] ?? null,
                    'total' => $value['subtotal'],
                ];


                if ($order->status == "completed") {
                    if ($value['product_variant_id'] !== null) {
                        $product_warehouse = ProductWarehouse::where('deleted_at', '=', null)
                            ->where('warehouse_id', $order->warehouse_id)
                            ->where('product_id', $value['product_id'])
                            ->where('product_variant_id', $value['product_variant_id'])
                            ->first();

                        if ($unit && $product_warehouse) {
                            if ($unit->operator == '/') {
                                $product_warehouse->qte -= $value['quantity'] / $unit->operator_value;
                            } else {
                                $product_warehouse->qte -= $value['quantity'] * $unit->operator_value;
                            }
                            $product_warehouse->save();
                        }

                    } else {
                        $product_warehouse = ProductWarehouse::where('deleted_at', '=', null)
                            ->where('warehouse_id', $order->warehouse_id)
                            ->where('product_id', $value['product_id'])
                            ->first();

                        if ($unit && $product_warehouse) {
                            if ($unit->operator == '/') {
                                $product_warehouse->qte -= $value['quantity'] / $unit->operator_value;
                            } else {
                                $product_warehouse->qte -= $value['quantity'] * $unit->operator_value;
                            }
                            $product_warehouse->save();
                        }
                    }
                }
            }
            SaleDetail::insert($orderDetails);

            $role = Auth::user()->roles()->first();
            $view_records = Role::findOrFail($role->id)->inRole('record_view');

            if ($request->payment['status'] != 'pending') {
                $sale = Sale::findOrFail($order->id);
                // Check If User Has Permission view All Records
                if (!$view_records) {
                    // Check If User->id === sale->id
                    $this->authorizeForUser($request->user('api'), 'check_record', $sale);
                }


                try {

                    $total_paid = $sale->paid_amount + $request['amount'];
                    $due = $sale->GrandTotal - $total_paid;
                    
                    if ($due === 0.0 || $due < 0.0) {
                        $payment_status = 'paid';
                    } else if ($due != $sale->GrandTotal) {
                        $payment_status = 'partial';
                    } else if ($due == $sale->GrandTotal) {
                        $payment_status = 'unpaid';
                    }
                    
                    if($request['amount'] > 0){
                        if($request->payment['Reglement'] == 'credit card'){
                            
                            // ADD LATER ( CREDIT CARDS )

                        // Paying Method Cash
                        }else{

                            // PaymentSale::create([
                            //     'sale_id' => $order->id,
                            //     'Ref' => app('App\Http\Controllers\PaymentSalesController')->getNumberOrder(),
                            //     'date' => Carbon::now(),
                            //     'Reglement' => $request->payment['Reglement'],
                            //     'montant' => $request['amount'],
                            //     'change' => $request['change'],
                            //     'user_id' => Auth::user()->id,
                            // ]);

                            $sale->update([
                                'paid_amount' => $total_paid,
                                'payment_status' => $payment_status,
                            ]);
                        }
                    }
                } catch (Exception $e) {
                    
                    return response()->json(['Error adding payment, Please try again!' => $e->getMessage()], 500);
                }
                
            }

        }, 5);

        return $order;
    }



    public function update(Request $request, int $id): Model
    {
        $sale = $this->read($id);

        DB::transaction(function () use ($request, $id) {

            $role = Auth::user()->roles()->first();
            $view_records = Role::findOrFail($role->id)->inRole('record_view');
            $current_Sale = Sale::findOrFail($id);

            // Check If User Has Permission view All Records
            if (!$view_records) {
                // Check If User->id === Sale->id
                $this->authorizeForUser($request->user('api'), 'check_record', $current_Sale);
            }

            $old_sale_details = SaleDetail::where('sale_id', $id)->get();
            $new_sale_details = $request['details'];
            $length = sizeof($new_sale_details);

            // Get Ids for new Details
            $new_products_id = [];
            foreach ($new_sale_details as $new_detail) {
                $new_products_id[] = $new_detail['id'];
            }

            // Init Data with old Parametre
            $old_products_id = [];
            foreach ($old_sale_details as $key => $value) {
                $old_products_id[] = $value->id;
                
                //check if detail has sale_unit_id Or Null
                if($value['sale_unit_id'] !== null){
                    $old_unit = Unit::where('id', $value['sale_unit_id'])->first();
                }else{
                    $product_unit_sale_id = Product::with('unitSale')
                    ->where('id', $value['product_id'])
                    ->first();
                    $old_unit = Unit::where('id', $product_unit_sale_id['unitSale']->id)->first();
                }

                if($value['sale_unit_id'] !== null){
                    if ($current_Sale->status == "completed") {

                        if ($value['product_variant_id'] !== null) {
                            $product_warehouse = product_warehouse::where('deleted_at', '=', null)
                                ->where('warehouse_id', $current_Sale->warehouse_id)
                                ->where('product_id', $value['product_id'])
                                ->where('product_variant_id', $value['product_variant_id'])
                                ->first();

                            if ($product_warehouse) {
                                if ($old_unit->operator == '/') {
                                    $product_warehouse->qte += $value['quantity'] / $old_unit->operator_value;
                                } else {
                                    $product_warehouse->qte += $value['quantity'] * $old_unit->operator_value;
                                }
                                $product_warehouse->save();
                            }

                        } else {
                            $product_warehouse = ProductWarehouse::where('deleted_at', '=', null)
                                ->where('warehouse_id', $current_Sale->warehouse_id)
                                ->where('product_id', $value['product_id'])
                                ->first();
                            if ($product_warehouse) {
                                if ($old_unit->operator == '/') {
                                    $product_warehouse->qte += $value['quantity'] / $old_unit->operator_value;
                                } else {
                                    $product_warehouse->qte += $value['quantity'] * $old_unit->operator_value;
                                }
                                $product_warehouse->save();
                            }
                        }
                    }
                    // Delete Detail
                    if (!in_array($old_products_id[$key], $new_products_id)) {
                        $SaleDetail = SaleDetail::findOrFail($value->id);
                        $SaleDetail->delete();
                    }
                }
            }

            // Update Data with New request
            foreach ($new_sale_details as $prd => $prod_detail) {
                
                if($prod_detail['no_unit'] !== 0){

                    $unit_prod = Unit::where('id', $prod_detail['sale_unit_id'])->first();

                    if ($request['status'] == "completed") {

                        if ($prod_detail['product_variant_id'] !== null) {
                            $product_warehouse = ProductWarehouse::where('deleted_at', '=', null)
                                ->where('warehouse_id', $request->warehouse_id)
                                ->where('product_id', $prod_detail['product_id'])
                                ->where('product_variant_id', $prod_detail['product_variant_id'])
                                ->first();

                            if ($product_warehouse) {
                                if ($unit_prod->operator == '/') {
                                    $product_warehouse->qte -= $prod_detail['quantity'] / $unit_prod->operator_value;
                                } else {
                                    $product_warehouse->qte -= $prod_detail['quantity'] * $unit_prod->operator_value;
                                }
                                $product_warehouse->save();
                            }

                        } else {
                            $product_warehouse = ProductWarehouse::where('deleted_at', '=', null)
                                ->where('warehouse_id', $request->warehouse_id)
                                ->where('product_id', $prod_detail['product_id'])
                                ->first();

                            if ($product_warehouse) {
                                if ($unit_prod->operator == '/') {
                                    $product_warehouse->qte -= $prod_detail['quantity'] / $unit_prod->operator_value;
                                } else {
                                    $product_warehouse->qte -= $prod_detail['quantity'] * $unit_prod->operator_value;
                                }
                                $product_warehouse->save();
                            }
                        }

                    }

                    $orderDetails['sale_id'] = $id;
                    $orderDetails['price'] = $prod_detail['Unit_price'];
                    $orderDetails['sale_unit_id'] = $prod_detail['sale_unit_id'];
                    $orderDetails['TaxNet'] = $prod_detail['tax_percent'];
                    $orderDetails['tax_method'] = $prod_detail['tax_method'];
                    $orderDetails['discount'] = $prod_detail['discount'];
                    $orderDetails['discount_method'] = $prod_detail['discount_method'];
                    $orderDetails['quantity'] = $prod_detail['quantity'];
                    $orderDetails['product_id'] = $prod_detail['product_id'];
                    $orderDetails['product_variant_id'] = $prod_detail['product_variant_id'];
                    $orderDetails['total'] = $prod_detail['subtotal'];
                    
                    if (!in_array($prod_detail['id'], $old_products_id)) {
                        $orderDetails['date'] = Carbon::now();
                        $orderDetails['sale_unit_id'] = $unit_prod ? $unit_prod->id : Null;
                        SaleDetail::Create($orderDetails);
                    } else {
                        SaleDetail::where('id', $prod_detail['id'])->update($orderDetails);
                    }
                }
            }

            $due = $request['GrandTotal'] - $current_Sale->paid_amount;
            if ($due === 0.0 || $due < 0.0) {
                $payment_status = 'paid';
            } else if ($due != $request['GrandTotal']) {
                $payment_status = 'partial';
            } else if ($due == $request['GrandTotal']) {
                $payment_status = 'unpaid';
            }

            $current_Sale->update([
                'date' => $request['date'],
                'client_id' => $request['client_id'],
                'warehouse_id' => $request['warehouse_id'],
                'notes' => $request['notes'],
                'status' => $request['status'],
                'tax_rate' => $request['tax_rate'],
                'TaxNet' => $request['TaxNet'],
                'discount' => $request['discount'],
                'shipping' => $request['shipping'],
                'GrandTotal' => $request['GrandTotal'],
                'payment_status' => $payment_status,
            ]);

        }, 5);

        return $sale;
    }



    public function delete(int $id): bool
    {
        return $this->read($id)->delete();
    }



    public function multiSearch(Request $request): Builder
    {
        $sales = Sale::filter($request)->where(function ($q) use ($request) {
            return where('Ref', 'LIKE', "%{$request->search}%")
            ->orWhere('status', 'LIKE', "%{$request->search}%")
            ->orWhere('GrandTotal', $request->search)
            ->orWhere('payment_status', 'like', "$request->search")
            ->orWhere(function ($query) use ($request) {
                return $query->whereHas('client', function ($q) use ($request) {
                    $q->where('name', 'LIKE', "%{$request->search}%");
                });
            })
            ->orWhere(function ($query) use ($request) {
                return $query->whereHas('warehouse', function ($q) use ($request) {
                    $q->where('name', 'LIKE', "%{$request->search}%");
                });
            });
        });
        return $sales;
    }

    public function makeCode(): string
    {
        $last = Sale::latest('id')->first();

        if ($last) {
            $item = $last->Ref;
            $nwMsg = explode("_", $item);
            $inMsg = $nwMsg[1] + 1;
            $code = $nwMsg[0] . '_' . $inMsg;
        } else {
            $code = 'EXP_1111';
        }
        return $code;
    }
}
