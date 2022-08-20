<?php

namespace App\Http\Resources\Setting;

use App\Http\Resources\Client\ClientResource;
use App\Http\Resources\Currency\CurrencyResource;
use App\Http\Resources\Warehouse\WarehouseResource;
use Illuminate\Http\Resources\Json\JsonResource;

class SettingResource extends JsonResource
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
            'email' => $this->email,
            'CompanyName' => $this->CompanyName,
            'CompanyPhone' => $this->CompanyPhone,
            'CompanyAddress' => $this->CompanyAddress,
            'logo' => $this->logo,
            'footer' => $this->footer,
            'developed_by' => $this->developed_by,
            'default_language' => $this->default_language,
            'client' => new ClientResource($this->client),
            'currency' => new CurrencyResource($this->currency),
            'warehouse' => new WarehouseResource($this->warehouse),
        ];
    }
}
