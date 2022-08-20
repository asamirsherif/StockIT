<?php

namespace App\Filters\Purchase;

use Illuminate\Database\Eloquent\Builder;

class PurproviderIDFilter
{
    public function filter(Builder $builder, $value)
    {
        return $builder->Where('provider_id', $value);
    }
}
