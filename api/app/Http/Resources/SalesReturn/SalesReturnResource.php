<?php

namespace App\Http\Resources\SalesReturn;

use App\Http\Resources\Client\ClientResource;
use App\Http\Resources\Warehouse\WarehouseResource;
use Illuminate\Http\Resources\Json\JsonResource;


class SalesReturnResource extends JsonResource
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
            'user_id' => $this->user_id,
            'date' => $this->date,
            'Ref' => $this->Ref,
            // 'client_id' => $this->client_id,
            'client_id' => new ClientResource($this->client),
            'warehouse_id' => new WarehouseResource($this->warehouse) ,
            'tax_rate' => $this->tax_rate,
            'TaxNet' => $this->TaxNet,
            'discount' => $this->discount,
            'shipping' => $this->shipping,
            'GrandTotal' => $this->GrandTotalde,
            'paid_amount' => $this->paid_amount,
            'payment_statut' => $this->payment_statut,
            'status' => $this->status,
            'notes' => $this->notes,
            'salesDetails' => SalesReturnDetailsResource::collection($this->salesReturn)
        ];
    }
}
