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
use PDF;

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
        if (!$setting) return $this->errMsg('There is no setting in your system!');

        $data = [
            'sale' => new ShowSaleResource($sale),
            'setting' => new SettingResource($setting)
        ];

        return $this->succWithData($data, 'Invoice generated successfully');
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
        if (!$setting) return $this->errMsg('There is no setting in your system!');

        $data = [
            'purchase' => new PurchaseResource($purchase),
            'setting' => new SettingResource($setting)
        ];

        return $this->succWithData($data, 'Invoice generated successfully');
    }


    /**
     * sale Invoice PDF
     * @param int $id
     */
    public function saleInvoicePDF(int $id)
    {
        $sale = Sale::find($id);
        $setting = Setting::latest()->first();
        if (!$sale) return $this->errMsg('No Sale to genreate PDF');
        if (!$setting) return $this->errMsg('There is no setting in your system!');

        $pdf = PDF::loadView('pdf.salePDF', [
            'setting' => new SettingResource($setting),
            'sale' => new ShowSaleResource($sale)
        ]);

        return $pdf->download('sale.pdf');
    }


    /**
     * purchase Invoice PDF
     * @param int $id
     */
    public function purchaseInvoicePDF(int $id)
    {
        $purchase = Purchase::find($id);
        $setting = Setting::latest()->first();
        if (!$purchase) return $this->errMsg('No Purchase to genreate PDF');
        if (!$setting) return $this->errMsg('There is no setting in your system!');

        $pdf = PDF::loadView('pdf.purchasePDF', [
            'setting' => new SettingResource($setting),
            'purchase' => new PurchaseResource($purchase)
        ]);

        return $pdf->download('purchase.pdf');
    }
}
