<?php

namespace App\Models;

use App\Filters\Expense\ExpenseFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;

class Expense extends Model
{
    use HasFactory, SoftDeletes;

    protected $casts = [
        'user_id' => 'integer',
        'expense_category_id' => 'integer',
        'warehouse_id' => 'integer',
        'amount' => 'double',
    ];


    // for filter
    public function scopeFilter(Builder $builder, Request $request)
    {
        return (new ExpenseFilter($request))->filter($builder);
    }


    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class);
    }

    public function expense_category()
    {
        return $this->belongsTo(ExpenseCategory::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
