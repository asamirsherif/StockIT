<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;

class GrandTotalFilter
{

    public function filter(Builder $builder, $value)
    {
        return $builder->Where('GrandTotal', $value);
    }
}
