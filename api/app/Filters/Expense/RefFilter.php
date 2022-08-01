<?php

namespace App\Filters\Expense;

use Illuminate\Database\Eloquent\Builder;

class RefFilter
{
    public function filter(Builder $builder, $value)
    {
        return $builder->orWhere('Ref', "LIKe", "%" . $value . "%");
    }
}
