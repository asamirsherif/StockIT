<?php

namespace App\Http\Controllers;

use App\Http\Resources\Purchase\PurchaseResource;
use App\Http\Resources\Sale\ShowSaleResource;
use App\Http\Resources\Setting\SettingResource;
use App\Models\Purchase;
use App\Models\Sale;
use App\Models\Setting;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;

class invoiceController extends Controller
{
    use ResponseTrait;


    /**
     * Sale Invoice
     * @param int $id
     * 
     */
    public function saleInvoice(int $id)
    {
        $sale = Sale::find($id);
        $setting = Setting::latest()->first();
        if (!$sale) return  $this->errMsg('No sale to generate Invoice!');
        if(!$setting) return $this->errMsg('There is no setting in your system!');

        $data = [
            'sale' => new ShowSaleResource($sale),
            'setting'=> new SettingResource($setting)
        ];

        return $this->succWithData($data,'Invoice generated successfully');
    }



    /**
     * purchase Invoice
     * @param int $id
     * 
     */
    public function purchaseInvoice(int $id)
    {
        $purchase = Purchase::find($id);
        $setting = Setting::latest()->first();
        if (!$purchase) return  $this->errMsg('No purchase to generate Invoice!');
        if(!$setting) return $this->errMsg('There is no setting in your system!');

        $data = [
            'purchase' => new PurchaseResource($purchase),
            'setting'=> new SettingResource($setting)
        ];

        return $this->succWithData($data,'Invoice generated successfully');
    }
}
