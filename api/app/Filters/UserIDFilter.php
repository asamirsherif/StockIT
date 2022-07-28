<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;

class UserIDFilter
{
    public function filter(Builder $builder, $value)
    {
        return $builder->orWhere('user_id', $value);
    }
}
