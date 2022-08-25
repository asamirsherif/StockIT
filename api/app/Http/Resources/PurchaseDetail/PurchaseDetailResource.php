<?php

namespace App\Http\Resources\PurchaseDetail;

use App\Http\Resources\Product\ShowProductResource;
use App\Http\Resources\Purchase\PurchaseResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'cost' => $this->cost,
            'purchase_unit_id' => $this->purchase_unit_id,
            'TaxNet' => $this->TaxNet,
            'tax_method' => $this->tax_method,
            'discount' => $this->discount,
            'discount_method' => $this->discount_method,
            'purchase_id' => $this->purchase->id,
            'product' => new ShowProductResource($this->product),
            'product_id'=>$this->product->id,
            'product_variant_id' => $this->product_variant_id,
            'total' => $this->total,
            'quantity' => $this->quantity
        ];
    }
}
