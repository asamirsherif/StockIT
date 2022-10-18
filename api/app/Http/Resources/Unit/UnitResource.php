<?php

namespace App\Http\Resources\Unit;

use Illuminate\Http\Resources\Json\JsonResource;

class UnitResource extends JsonResource
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
            'name' => $this->name,
            'ShortName'      => $this->ShortName,
            'base_unit'      => $this->baseunit ? new UnitResource($this->baseunit) : "-",
            'operator'       => $this->operator,
            'operator_value' => $this->operator_value,
            'created_at'     => $this->created_at,
            'updated_at'     => $this->updated_at,
            'deleted_at'     => $this->deleted_at,
        ];
    }
}
