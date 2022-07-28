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

    public function scopeFilter(Builder $builder, Request $request)
    {
        return (new ExpenseFilter($request))->filter($builder);
    }
}
