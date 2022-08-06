<?php

namespace App\Http\Resources\Sale;

use Illuminate\Http\Resources\Json\JsonResource;

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
            'code' => $this->code ? $this->code : "-",
            'Ref' => $this->Ref,
            'created_by' => $this->user->username,
            'status' => $this->status,
            'discount' => $this->discount,
            'shipping' => $this->shipping,
            'warehouse_name' => $this->warehouse->name,
            'client_id' => $this->client->id,
            'client_name' => $this->client->name,
            'client_email' => $this->client->email,
            'client_tele' => $this->client->phone,
            'client_code' => $this->client->code,
            'client_adr' => $this->client->address,
            'GrandTotal' => $grandtotal,
            'paid_amount' => $paid_amount,
            'due' => $due,
            'payment_status' => $this->payment_status,
            

        ];
    }
}
