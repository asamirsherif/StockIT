<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;

class StatusFilter
{

    public function filter(Builder $builder, $value)
    {
        return $builder->Where('status', $value);
    }
}
