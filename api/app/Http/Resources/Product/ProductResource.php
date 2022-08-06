<?php

namespace App\Http\Resources\Product;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
            'code' => $this->code,
            'name' => $this->name,
            'category' => $this->category->name ? $this->category->name : "N/D",
            'brand' => $this->brand->null ? $this->brand->name : "N/D",
            'unit' => $this->unit->ShortName ? $this->unit->ShortName : "N/D",
            'price' => $this->price,
            'images' => $this->image,
            'variants' => ProductVariantResource::collection($this->productVariants)
        ];
    }
}
