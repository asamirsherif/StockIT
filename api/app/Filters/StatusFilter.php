<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;

class StatusFilter
{

    public function filter(Builder $builder, $value)
    {
        return $value ? $builder->orWhere('status', $value) : $builder;
    }
}
