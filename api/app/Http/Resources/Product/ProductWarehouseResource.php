<?php

namespace App\Http\Resources\Product;

use App\Http\Resources\Warehouse\WarehouseResource;
use App\Models\Warehouse;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductWarehouseResource extends JsonResource
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
            'product_id' => $this->product_id,
            'warehouse' => new WarehouseResource(Warehouse::find($this->warehouse_id)),
            'quantity' => $this->qte
        ];
    }
}
