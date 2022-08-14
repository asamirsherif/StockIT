<?php

namespace App\Http\Resources\SalesReturn;

use Illuminate\Http\Resources\Json\JsonResource;

class SalesReturnDetailsResource extends JsonResource
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
            'sale_return_id ' => $this->sale_return_id ,
            'product_id ' => $this->product_id ,
            'price' => $this->price,
            // 'client_id' => $this->client_id,
            // 'client_id' => new ClientResource($this->client),
            // 'warehouse_id' => new WarehouseResource($this->warehouse) ,
            'sale_unit_id ' => $this->sale_unit_id ,
            'TaxNet' => $this->TaxNet,
            'tax_method' => $this->tax_method,
            'discount' => $this->discount,
            'discount_method' => $this->discount_method,
            'product_variant_id ' => $this->product_variant_id ,
            'quantity' => $this->quantity,
            'total' => $this->total
        ];
    }
}
