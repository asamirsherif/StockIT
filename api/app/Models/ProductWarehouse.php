<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductWarehouse extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'product_warehouse';
    protected $fillable = [
        'product_id', 'warehouse_id', 'product_variant_id', 'qte'
    ];

    // product relation
    public function product() {
        return $this->belongsTo(Product::class);
    }

    // warehouse relation
    public function warehouse() {
        return $this->belongsTo(Warehouse::class);
    }

    // product_varient relation
    public function productVariant() {
        return $this->belongsTo(ProductVariant::class);
    }
}