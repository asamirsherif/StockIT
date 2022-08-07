<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;

class GrandTotalFilter
{

    public function filter(Builder $builder, $value)
    {
        return $value ? $builder->orWhere('GrandTotal', $value) : $builder;
    }
}
