<?php

namespace App\Filters\Purchase;

use Illuminate\Database\Eloquent\Builder;

class PurproviderIDFilter
{
    public function filter(Builder $builder, $value)
    {
        return $value ? $builder->orWhere('provider_id', $value) : $builder;
    }
}