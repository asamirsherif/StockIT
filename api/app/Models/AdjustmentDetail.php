<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdjustmentDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id', 'adjustment_id', 'product_variant_id', 'quantity', 'type'
    ];

    protected $casts = [
        'quantity' => 'double',
        'adjustment_id' => 'integer',
        'product_id' => 'integer',
        'product_variant_id' => 'integer',
    ];

    // adjustment relation
    public function adjustment() {
        return $this->belongsTo(Adjustment::class);
    }

    // product relation
    public function product() {
        return $this->belongsTo(Product::class);
    }
}
