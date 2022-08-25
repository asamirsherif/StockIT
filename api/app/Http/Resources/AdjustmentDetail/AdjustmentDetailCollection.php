<?php

namespace App\Http\Resources\AdjustmentDetail;

use Illuminate\Http\Resources\Json\ResourceCollection;

class AdjustmentDetailCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'adjustmentDeatils' => $this->collection,
        ];
    }
}
