<?php

namespace App\Http\Resources\Adjustment;

use App\Http\Resources\AdjustmentDetail\AdjustmentDetailCollection;
use App\Http\Resources\AdjustmentDetail\AdjustmentDetailResource;
use App\Http\Resources\Warehouse\WarehouseResource;
use Illuminate\Http\Resources\Json\JsonResource;

class AdjustmentResource extends JsonResource
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
            'id'            => $this->id,
            'user_id'       => $this->user_id,
            'date'          => $this->date,
            'Ref'           => $this->Ref,
            'warehouse_id'  => new WarehouseResource($this->warehouse),
            'items'         => $this->items,
            'notes'         => $this->notes,
            'details'       => new AdjustmentDetailCollection($this->adjustmentDeatils)
        ];
    }
}
