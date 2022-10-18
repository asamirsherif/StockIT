<?php

namespace App\Http\Resources\Product;

use App\Http\Resources\Unit\UnitResource;
use App\Http\Resources\Brand\BrandResource;
use App\Http\Resources\Category\CategoryResource;

use Illuminate\Http\Resources\Json\JsonResource;

class ShowProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        //----------------------------------------------------

        $price = $this->unitSale->operator == '/' ?
            (int)$this->price / (int) $this->unitSale->operator_value :
            (int)$this->price * (int)$this->unitSale->operator_value;

        $cost = $this->unitPurchase->operator == '/' ?
            (int)$this->cost / (int)$this->unitPurchase->operator_value :
            (int)$this->cost * (int)$this->unitPurchase->operator_value;


        if ($this->TaxNet !== 0.0) {
            //Exclusive
            if ($this->tax_method == 'Exclusive') {
                $tax_price = 0; //$price * $this->TaxNet / 100;
                $tax_cost = 0; //$cost * $this->TaxNet / 100;

                $total_cost = $cost; //+ $tax_cost;
                $total_price = $price; //+ $tax_price;
                $net_cost = $cost;
                $net_price = $price;

                // Inxclusive
            } else {
                $tax_price = $price * $this->TaxNet / 100;
                $tax_cost = $cost * $this->TaxNet / 100;

                $total_cost = $cost + $tax_cost;
                $total_price = $price + $tax_price;
                $net_cost = $cost;
                $net_price = $price;
            }
        } else {
            $total_cost = $cost;
            $total_price = $price;
            $net_cost = $cost;
            $net_price = $price;
            $tax_price = 0;
            $tax_cost = 0;
        }

        //----------------------------------------------------

        return [
            'id' => $this->id,
            'code' => $this->code,
            'name' => $this->name,
            'type_barcode' => $this->Type_barcode,
            'brand' => new BrandResource($this->brand),
            'category' => new CategoryResource($this->category),
            'variants' => ProductVariantResource::collection($this->productVariants),
            'unit' => new UnitResource($this->unit),
            'unitPurchase' => new UnitResource($this->unitPurchase),
            'unitSale' => new UnitResource($this->unitSale),
            'tax_method' => $this->tax_method,
            'tax_percent' => $this->TaxNet,
            'fixed_price' => $this->price,
            'price' => $price,
            'fixed_cost' => $this->cost,
            'cost' => $cost,
            'total_cost' => $total_cost,
            'total_price' => $total_price,
            'net_cost' => $net_cost,
            'net_price' => $net_price,
            'tax_cost' => $tax_cost,
            'tax_price' => $tax_price,
            'in_stock' => $this->warehouseQuantity() ? $this->warehouseQuantity()->qte : 0,
            'productWarehouses'=>  ProductWarehouseResource::collection($this->productWarehouse),
        ];
    }


    //---------------------- custome collection of products which belongs to warehouse
    private static $warehouse_id;

    public static function collectionOfWarehouse($resource, int $warehouse_id)
    {
        self::$warehouse_id = $warehouse_id;
        return parent::collection($resource);
    }

    private function warehouseQuantity()
    {
        return $this->productWarehouse()->where('warehouse_id', self::$warehouse_id)->first();
    }
}
