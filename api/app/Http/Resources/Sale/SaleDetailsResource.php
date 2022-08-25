<?php

namespace App\Http\Resources\Sale;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Unit\UnitResource;
use App\Http\Resources\Product\ShowProductResource;

class SaleDetailsResource extends JsonResource
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
            'date' => $this->date,
            'product' => New ShowProductResource($this->product),
            'quantity' => $this->quantity,
            'total' => $this->total,
            'price' => $this->price,
            'unit' => New UnitResource($this->unit),
            'discount_method' => $this->discount_method,
            'Unit_price' => $this->Unit_price,
            'discount' => $this->discount,
            'TaxNet' => $this->TaxNet,
            'quantity' => $this->quantity,
        ];
    }
}