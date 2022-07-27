<?php

namespace App\Http\Resources\Client;

use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
{

    // public static $wrap = false;

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'name'       => $this->name,
            'code'       => $this->code,
            'email'      => $this->email,
            'country'    => $this->country,
            'city'       => $this->city,
            'phone'      => $this->phone,
            'adresse'    => $this->adresse,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'deleted_at' => $this->deleted_at,
        ];
    }
}
