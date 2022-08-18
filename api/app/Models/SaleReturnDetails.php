<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaleReturnDetails extends Model
{
    use HasFactory;

    protected $fillable = [
        'id', 'product_id', 'sale_return_id','sale_unit_id', 'total', 'quantity', 'product_variant_id',
        'price', 'TaxNet', 'discount', 'discount_method', 'tax_method',
    ];


    protected $casts = [
        'total' => 'double',
        'quantity' => 'double',
        'sale_return_id' => 'integer',
        'product_id' => 'integer',
        'sale_unit_id' => 'integer',
        'product_variant_id' => 'integer',
        'price' => 'double',
        'TaxNet' => 'double',
        'discount' => 'double',
    ];

    public function SaleReturn()
    {
        return $this->belongsTo(SalesReturn::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
