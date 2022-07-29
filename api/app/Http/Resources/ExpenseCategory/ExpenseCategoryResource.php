<?php

namespace App\Http\Resources\ExpenseCategory;

use Illuminate\Http\Resources\Json\JsonResource;

class ExpenseCategoryResource extends JsonResource
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
            "user"=>"hena user",
            "name"=>$this->name,
            "description"=>$this->description
        ];
    }
}
