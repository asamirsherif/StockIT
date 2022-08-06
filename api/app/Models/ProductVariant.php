<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductVariant extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'product_variants';

    protected $fillable = [
        'product_id', 'name', 'qty',
    ];

    protected $casts = [
        'product_id' => 'integer',
        'qty' => 'double',
    ];


    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
