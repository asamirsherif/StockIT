<?php

namespace App\Http\Resources\PurchaseDetail;

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
            'purchase_id' => $this->purchase_id,
            'product_id' => $this->product_id,
            'product_variant_id' => $this->product_variant_id,
            'total' => $this->total,
            'quantity' => $this->quantity
        ];
    }
}
