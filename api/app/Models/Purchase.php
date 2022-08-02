<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Purchase extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id', 'Ref', 'date', 'provider_id', 'warehouse_id', 'tax_rate', 'TaxNet', 'discount', 'shipping',
        'GrandTotal', 'paid_amount', 'status', 'payment_status', 'notes'
    ];
}
