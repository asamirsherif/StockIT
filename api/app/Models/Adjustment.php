<?php

namespace App\Models;

use App\Filters\Adjustment\AdjustmentFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;

class Adjustment extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id', 'date', 'Ref', 'warehouse_id', 'items', 'notes'
    ];

    // filteration
    public function scopeFilter(Builder $builder, Request $request) {
        
        return (new AdjustmentFilter($request))->filter($builder);
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
}
