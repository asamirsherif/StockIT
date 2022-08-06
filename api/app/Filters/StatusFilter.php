<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;

class StatusFilter
{
    public function filter(Builder $builder, $value)
    {
        return $builder->orWhere('status', "LIKe", "%" . $value . "%");
    }
}
