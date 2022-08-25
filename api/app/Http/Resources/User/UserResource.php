<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Resources\Json\JsonResource;


class UserResource extends JsonResource
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
            "firstname" => $this->firstname,
            "lastname" => $this->lastname,
            "username" => $this->username,
            "email" => $this->email,
            "phone" => $this->phone,
            "status" => $this->status,
        ];
    }
}