<?php

namespace App\Filters\Purchase;

use Illuminate\Database\Eloquent\Builder;

class PurStatus
{
    public function filter(Builder $builder, $value)
    {
        return $value ? $builder->orWhere('status', $value) : $builder;
    }
}