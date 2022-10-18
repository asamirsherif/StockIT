<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;

class DateFilter
{
    public function filter(Builder $builder, $value)
    {
        return $builder->Where("date", "LIKE", "%" . $value . "%");
    }
}
