<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Warehouse extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = "warehouses";

    protected $fillable = [
        "name", "city", "mobile", "zip", "email", "country"
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }
}
