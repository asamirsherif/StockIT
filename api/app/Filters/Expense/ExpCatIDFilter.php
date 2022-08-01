<?php

namespace App\Filters\Expense;

use Illuminate\Database\Eloquent\Builder;

class ExpCatIDFilter
{
    public function filter(Builder $builder, $value)
    {
        return $value ? $builder->orWhere('expense_category_id', $value) : $builder;
    }
}
