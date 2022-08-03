<?php

namespace App\Models;

use App\Filters\Purchase\PurchaseFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;

class Purchase extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id', 'Ref', 'date', 'provider_id', 'warehouse_id', 'tax_rate', 'TaxNet', 'discount', 'shipping',
        'GrandTotal', 'paid_amount', 'status', 'payment_status', 'notes'
    ];

    // filteration
    public function scopeFilter(Builder $builder, Request $request)
    {
        return (new PurchaseFilter($request))->filter($builder);
    }

    // user_id relation
    public function user() {
        return $this->belongsTo(User::class);
    }

    // warehouse_id relation
    public function warehouse()
    {
        return $this->belongsTo(warehouse::class);
    }

    // provider_id relation
    public function provider()
    {
        return $this->belongsTo(Provider::class);
    }
}
