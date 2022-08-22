<?php

namespace App\Http\Resources\AdjustmentDetail;

use App\Http\Resources\Product\ShowProductResource;
use Illuminate\Http\Resources\Json\JsonResource;

class AdjustmentDetailResource extends JsonResource
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
            'id'                 => $this->id,
            'product'            => new ShowProductResource($this->product),
            'adjustment_id'      => $this->adjustment_id,
            'product_variant_id' => $this->product_variant_id,
            'type'               => $this->type,
            'quantity'           => $this->quantity
        ];
    }
}
