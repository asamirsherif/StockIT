<?php

namespace App\Http\Resources\Sale;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Warehouse\WarehouseResource;
use App\Http\Resources\Client\ClientResource;

class SaleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        $due = number_format($this->GrandTotal - $this->paid_amount,2,'.','');
        $grandtotal = number_format($this->GrandTotal, 2, '.', '');
        $paid_amount = number_format($this->paint_amount, 2, '.', '');

        return [

            'id' => $this->id,
            'date' => $this->date,
            'code' => $this->code ? $this->code : "-",
            'Ref' => $this->Ref,
            'tax_rate' => $this->tax_rate,
            'created_by' => $this->user->username,
            'status' => $this->status,
            'discount' => $this->discount,
            'shipping' => $this->shipping,
            'warehouse_name' => new WarehouseResource($this->warehouse),
            'client' => new ClientResource($this->client),
            'GrandTotal' => $grandtotal,
            'paid_amount' => $paid_amount,
            'due' => $due,
            'payment_status' => $this->payment_status,
            'notes' => $this->notes,


        ];
    }
}
