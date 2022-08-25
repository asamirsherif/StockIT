<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;

class WarehouseIDFilter
{

    public function filter(Builder $builder, $value)
    {
        return $builder->Where('warehouse_id', $value);
    }
}
