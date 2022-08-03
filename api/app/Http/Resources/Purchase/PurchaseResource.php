<?php

namespace App\Http\Resources\Purchase;

use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseResource extends JsonResource
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
            'user_id'        => $this->user_id,
            'date'           => $this->date,
            'Ref'            => $this->Ref,
            'provider_id'    => $this->provider_id,
            'warehouse_id'   => $this->warehouse_id,
            'tax_rate'       => $this->tax_rate,
            'TaxNet'         => $this->TaxNet,
            'discount'       => $this->discount,
            'shipping'       => $this->shipping,
            'GrandTotal'     => $this->GrandTotal,
            'paid_amount'    => $this->paid_amount,
            'status'         => $this->status,
            'payment_status' => $this->payment_status,
            'notes'          => $this->notes,
            'created_at'     => $this->created_at,
            'updated_at'     => $this->updated_at,
            'deleted_at'     => $this->deleted_at,

        ];
    }
}
