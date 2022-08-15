<?php

namespace App\Http\Resources\AdjustmentDetail;

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
            'product_id'         => $this->product_id,
            'adjustment_id'      => $this->adjustment_id ,
            'product_variant_id' => $this->product_variant_id,
            'type'               => $this->type,
            'quantity'           => $this->quantity
        ];
    }
}
