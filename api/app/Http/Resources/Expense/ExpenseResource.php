<?php

namespace App\Http\Resources\Expense;

use Illuminate\Http\Resources\Json\JsonResource;

class ExpenseResource extends JsonResource
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
            "id" => $this->id,
            "date" => $this->date,
            "ref" => $this->Ref,
            "details" => $this->details,
            "amount" => $this->amount,
            "user_id" => $this->user->name,
            "expense_category_id" => $this->expense_category_id,
            "warehouse_id" => $this->warehouse_id
        ];
    }
}
