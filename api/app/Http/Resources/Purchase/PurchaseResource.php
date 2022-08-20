<?php

namespace App\Http\Resources\Purchase;

use App\Http\Resources\Provider\ProviderResource;
use App\Http\Resources\PurchaseDetail\PurchaseDetailCollection;
use App\Http\Resources\PurchaseDetail\PurchaseDetailResource;
use App\Http\Resources\Warehouse\WarehouseResource;
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
            'id'             => $this->id,
            'user_id'        => $this->user_id,
            'date'           => $this->date,
            'Ref'            => $this->Ref,
            'provider'       => new ProviderResource($this->provider),
            'warehouse'      => new WarehouseResource($this->warehouse),
            'tax_rate'       => $this->tax_rate,
            'TaxNet'         => $this->TaxNet,
            'discount'       => $this->discount,
            'shipping'       => $this->shipping,
            'GrandTotal'     => $this->GrandTotal,
            'paid_amount'    => $this->paid_amount,
            'status'         => $this->status,
            'payment_status' => $this->payment_status,
            'notes'          => $this->notes,
            'purchaseDetails' => PurchaseDetailResource::collection($this->purchaseDetails)

        ];
    }
}
