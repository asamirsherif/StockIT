<?php

namespace App\Models;

use App\Filters\SalesReturn\SalesReturnFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;

class SalesReturn extends Model
{
    use HasFactory, SoftDeletes;
    protected $table= "sale_returns";


     // filteration
     public function scopeFilter(Builder $builder, Request $request) {

        return (new SalesReturnFilter($request))->filter($builder);
    }

    // user_id relation
    public function user() {
        return $this->belongsTo(User::class);
    }

    // warehouse_id relation
    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class);

    }
    // client_id relation

    public function client()
    {
        return $this->belongsTo(Client::class);

    }

    public function details()
    {
        return $this->hasMany(SaleReturnDetails::class);
    }
}
