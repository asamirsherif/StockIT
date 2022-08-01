<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;

class WarehouseIDFilter
{

    public function filter(Builder $builder, $value)
    {
        return $value ? $builder->orWhere('warehouse_id', $value) : $builder;
    }
}
